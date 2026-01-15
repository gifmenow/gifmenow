// scripts/diagnose-segment-config.mjs
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");

// These are the segment config exports Next.js cares about.
// Anything else like `config` is suspicious in App Router.
const SEGMENT_EXPORTS = new Set([
  "config", // NOT allowed in App Router
  "runtime",
  "revalidate",
  "dynamic",
  "dynamicParams",
  "fetchCache",
  "preferredRegion",
  "maxDuration",
]);

const ALLOWED_DYNAMIC = new Set(["auto", "force-dynamic", "force-static", "error"]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (p.endsWith(".ts") || p.endsWith(".tsx")) out.push(p);
  }
  return out;
}

function lineOf(text, index) {
  return text.slice(0, index).split("\n").length;
}

const files = walk(APP_DIR);
const suspects = [];

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const text = fs.readFileSync(file, "utf8");

  const isClient = /^\s*["']use client["']\s*;?/m.test(text);

  // Find `export const X = ...`
  const re = /export\s+const\s+([A-Za-z0-9_]+)\s*=\s*([^;]+);?/g;
  let m;
  while ((m = re.exec(text))) {
    const name = m[1];
    if (!SEGMENT_EXPORTS.has(name)) continue;

    const value = m[2].trim();
    const ln = lineOf(text, m.index);

    // Flag definitely-bad ones
    if (name === "config") {
      suspects.push({ rel, ln, name, value, reason: "App Router does NOT allow `export const config`" });
      continue;
    }

    // Client components cannot export segment config in many cases
    if (isClient) {
      suspects.push({ rel, ln, name, value, reason: 'File is a Client Component ("use client")' });
      continue;
    }

    // Basic sanity checks
    if (name === "dynamic" && !ALLOWED_DYNAMIC.has(value.replace(/["']/g, ""))) {
      suspects.push({ rel, ln, name, value, reason: "dynamic has an invalid value" });
      continue;
    }

    if (name === "revalidate") {
      const cleaned = value.replace(/[()]/g, "").trim();
      // allow "false" or a number/expression; but flag obvious strings
      if (/^["']/.test(cleaned)) {
        suspects.push({ rel, ln, name, value, reason: "revalidate is a string (should be number or false)" });
      }
    }
  }

  // Also catch `export { runtime }` etc (rare)
  const re2 = /export\s*\{\s*([A-Za-z0-9_]+)\s*\}\s*;/g;
  while ((m = re2.exec(text))) {
    const name = m[1];
    if (SEGMENT_EXPORTS.has(name)) {
      suspects.push({ rel, ln: lineOf(text, m.index), name, value: "{...}", reason: "Re-export of segment config" });
    }
  }
}

if (!suspects.length) {
  console.log("✅ No obvious segment-config exports found. (We’ll widen the search next.)");
  process.exit(0);
}

console.log("🚨 Possible segment-config problems found:\n");
for (const s of suspects) {
  console.log(`- ${s.rel}:${s.ln}`);
  console.log(`  export const ${s.name} = ${s.value}`);
  console.log(`  Reason: ${s.reason}\n`);
}

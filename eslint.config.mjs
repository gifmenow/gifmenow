export default [
  {
    ignores: ["node_modules", ".next"],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-html-link-for-pages": "off",
      "react/no-danger": "off",
    },
  },
];

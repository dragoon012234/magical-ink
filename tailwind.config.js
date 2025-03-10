/* eslint-disable @typescript-eslint/no-require-imports */
const plugin = (/** @type {import("tailwindcss/types/config").PluginAPI} */ api) => {
  const { addComponents } = api;
  addComponents({
    ".absolute-fill": {
      position: "absolute",
      inset: "0",
    },
  });
};

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@rewind-ui/core/dist/theme/styles/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    plugin,
  ],
};

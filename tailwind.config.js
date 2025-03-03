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
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [plugin],
};

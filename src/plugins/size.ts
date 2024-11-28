import plugin from "tailwindcss/plugin";

export const size = plugin(({ matchUtilities, addUtilities, theme }) => {
  matchUtilities({
    "size": (value) => ({
      "block-size": value,
      "inline-size": value,
    }),
  }, {
    values: theme("size"),
  });
  addUtilities({
    ".size-screen": {
      "block-size": theme("height.screen"),
      "inline-size": theme("width.screen"),
    },
  });
});

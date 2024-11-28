import plugin from "tailwindcss/plugin";

export const size = plugin(({ matchUtilities, addUtilities, theme }) => {
  matchUtilities({
    "size": (value) => ({
      blockSize: value,
      inlineSize: value,
    }),
  }, {
    values: theme("size"),
  });
  addUtilities({
    ".size-screen": {
      blockSize: theme("height.screen"),
      inlineSize: theme("width.screen"),
    },
  });
});

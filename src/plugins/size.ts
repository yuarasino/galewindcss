import plugin from "tailwindcss/plugin";

export const size = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "size": (value) => ({
      blockSize: value,
      inlineSize: value,
    }),
  }, {
    values: theme("size"),
  });
});

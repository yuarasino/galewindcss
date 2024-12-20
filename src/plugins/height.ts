import plugin from "tailwindcss/plugin";

export const height = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "h": (value) => ({
      blockSize: value,
    }),
  }, {
    values: theme("height"),
  });
});

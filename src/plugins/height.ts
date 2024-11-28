import plugin from "tailwindcss/plugin";

export const height = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "h": (value) => ({
      "block-size": value,
    }),
  }, {
    values: theme("height"),
  });
});

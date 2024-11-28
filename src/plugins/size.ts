import plugin from "tailwindcss/plugin";

export const size = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "size": (value) => ({
      "block-size": value,
      "inline-size": value,
    }),
  }, {
    values: theme("size"),
  });
});

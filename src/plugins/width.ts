import plugin from "tailwindcss/plugin";

export const width = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "w": (value) => ({
      inlineSize: value,
    }),
  }, {
    values: theme("width"),
  });
});

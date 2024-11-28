import plugin from "tailwindcss/plugin";

export const width = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "w": (value) => ({
      "inline-size": value,
    }),
  }, {
    values: theme("width"),
  });
});

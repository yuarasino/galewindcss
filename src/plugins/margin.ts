import plugin from "tailwindcss/plugin";

export const margin = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "m": (value) => ({
      margin: value,
    }),
    "my": (value) => ({
      marginBlock: value,
    }),
    "mx": (value) => ({
      marginInline: value,
    }),
    "mt": (value) => ({
      marginBlockStart: value,
    }),
    "mb": (value) => ({
      marginBlockEnd: value,
    }),
    "ml": (value) => ({
      marginInlineStart: value,
    }),
    "mr": (value) => ({
      marginInlineEnd: value,
    }),
  }, {
    values: theme("margin"),
    supportsNegativeValues: true,
  });
});

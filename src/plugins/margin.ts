import plugin from "tailwindcss/plugin";

export const margin = plugin(({ matchUtilities, addUtilities, theme }) => {
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
  addUtilities({
    ".mt-screen": {
      marginBlockStart: theme("height.screen"),
    },
    ".mb-screen": {
      marginBlockEnd: theme("height.screen"),
    },
    ".ml-screen": {
      marginInlineStart: theme("width.screen"),
    },
    ".mr-screen": {
      marginInlineEnd: theme("width.screen"),
    },
    ".-mt-screen": {
      marginBlockStart: `-${theme("height.screen")}`,
    },
    ".-mb-screen": {
      marginBlockEnd: `-${theme("height.screen")}`,
    },
    ".-ml-screen": {
      marginInlineStart: `-${theme("width.screen")}`,
    },
    ".-mr-screen": {
      marginInlineEnd: `-${theme("width.screen")}`,
    },
  });
});

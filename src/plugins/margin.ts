import plugin from "tailwindcss/plugin";

export const margin = plugin(({ matchUtilities, addUtilities, theme }) => {
  matchUtilities({
    "m": (value) => ({
      "margin": value,
    }),
    "my": (value) => ({
      "margin-block": value,
    }),
    "mx": (value) => ({
      "margin-inline": value,
    }),
    "mt": (value) => ({
      "margin-block-start": value,
    }),
    "mb": (value) => ({
      "margin-block-end": value,
    }),
    "ml": (value) => ({
      "margin-inline-start": value,
    }),
    "mr": (value) => ({
      "margin-inline-end": value,
    }),
  }, {
    values: theme("margin"),
    supportsNegativeValues: true,
  });
  addUtilities({
    ".mt-screen": {
      "margin-block-start": theme("height.screen"),
    },
    ".mb-screen": {
      "margin-block-end": theme("height.screen"),
    },
    ".ml-screen": {
      "margin-inline-start": theme("width.screen"),
    },
    ".mr-screen": {
      "margin-inline-end": theme("width.screen"),
    },
    ".-mt-screen": {
      "margin-block-start": `-${theme("height.screen")}`,
    },
    ".-mb-screen": {
      "margin-block-end": `-${theme("height.screen")}`,
    },
    ".-ml-screen": {
      "margin-inline-start": `-${theme("width.screen")}`,
    },
    ".-mr-screen": {
      "margin-inline-end": `-${theme("width.screen")}`,
    },
  });
});

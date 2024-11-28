import plugin from "tailwindcss/plugin";

export const padding = plugin(({ matchUtilities, addUtilities, theme }) => {
  matchUtilities({
    "p": (value) => ({
      "padding": value,
    }),
    "py": (value) => ({
      "padding-block": value,
    }),
    "px": (value) => ({
      "padding-inline": value,
    }),
    "pt": (value) => ({
      "padding-block-start": value,
    }),
    "pb": (value) => ({
      "padding-block-end": value,
    }),
    "pl": (value) => ({
      "padding-inline-start": value,
    }),
    "pr": (value) => ({
      "padding-inline-end": value,
    }),
  }, {
    values: theme("padding"),
  });
  addUtilities({
    ".pt-screen": {
      "padding-block-start": theme("height.screen"),
    },
    ".pb-screen": {
      "padding-block-end": theme("height.screen"),
    },
    ".pl-screen": {
      "padding-inline-start": theme("width.screen"),
    },
    ".pr-screen": {
      "padding-inline-end": theme("width.screen"),
    },
  });
});

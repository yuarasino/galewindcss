import plugin from "tailwindcss/plugin";

export const padding = plugin(({ matchUtilities, addUtilities, theme }) => {
  matchUtilities({
    "p": (value) => ({
      padding: value,
    }),
    "py": (value) => ({
      paddingBlock: value,
    }),
    "px": (value) => ({
      paddingInline: value,
    }),
    "pt": (value) => ({
      paddingBlockStart: value,
    }),
    "pb": (value) => ({
      paddingBlockEnd: value,
    }),
    "pl": (value) => ({
      paddingInlineStart: value,
    }),
    "pr": (value) => ({
      paddingInlineEnd: value,
    }),
  }, {
    values: theme("padding"),
  });
  addUtilities({
    ".pt-screen": {
      paddingBlockStart: theme("height.screen"),
    },
    ".pb-screen": {
      paddingBlockEnd: theme("height.screen"),
    },
    ".pl-screen": {
      paddingInlineStart: theme("width.screen"),
    },
    ".pr-screen": {
      paddingInlineEnd: theme("width.screen"),
    },
  });
});

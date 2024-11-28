import plugin from "tailwindcss/plugin";

export const padding = plugin(({ matchUtilities, theme }) => {
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
});

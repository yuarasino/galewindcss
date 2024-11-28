import plugin from "tailwindcss/plugin";

export const inset = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "inset": (value) => ({
      inset: value,
    }),
    "inset-y": (value) => ({
      insetBlock: value,
    }),
    "inset-x": (value) => ({
      insetInline: value,
    }),
    "top": (value) => ({
      insetBlockStart: value,
    }),
    "bottom": (value) => ({
      insetBlockEnd: value,
    }),
    "left": (value) => ({
      insetInlineStart: value,
    }),
    "right": (value) => ({
      insetInlineEnd: value,
    }),
  }, {
    values: theme("inset"),
    supportsNegativeValues: true,
  });
});

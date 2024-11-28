import plugin from "tailwindcss/plugin";

export const insetShort = plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    "i": (value) => ({
      inset: value,
    }),
    "iy": (value) => ({
      insetBlock: value,
    }),
    "ix": (value) => ({
      insetInline: value,
    }),
    "it": (value) => ({
      insetBlockStart: value,
    }),
    "ib": (value) => ({
      insetBlockEnd: value,
    }),
    "il": (value) => ({
      insetInlineStart: value,
    }),
    "ir": (value) => ({
      insetInlineEnd: value,
    }),
  }, {
    values: theme("inset"),
    supportsNegativeValues: true,
  });
});

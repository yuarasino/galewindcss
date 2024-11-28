import plugin from "tailwindcss/plugin";

export const textAlign = plugin(({ addUtilities }) => {
  addUtilities({
    ".text-left": {
      textAlign: "start",
    },
    ".text-right": {
      textAlign: "end",
    },
    ".text-center": {
      textAlign: "center",
    },
    ".text-justify": {
      textAlign: "justify",
    },
  });
});

import type { Config } from "tailwindcss";
import { height } from "~/plugins/height.ts";
import { width } from "~/plugins/width.ts";
import { size } from "~/plugins/size.ts";

export const galewind: Partial<Config> = {
  theme: {
    extend: {
      height: { screen: "100svb" },
      width: { screen: "100svi" },
    },
  },
  corePlugins: {
    height: false,
    width: false,
    size: false,
  },
  plugins: [
    height,
    width,
    size,
  ],
};

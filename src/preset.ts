import type { Config } from "tailwindcss";
import { height } from "./plugins/height.ts";
import { width } from "./plugins/width.ts";
import { size } from "./plugins/size.ts";

export const galewind: Partial<Config> = {
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

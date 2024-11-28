import type { Config } from "tailwindcss";
import { height } from "~/plugins/height.ts";
import { width } from "~/plugins/width.ts";
import { size } from "~/plugins/size.ts";
import { margin } from "~/plugins/margin.ts";
import { padding } from "~/plugins/padding.ts";
import { inset } from "~/plugins/inset.ts";
import { insetShort } from "~/plugins/insetShort.ts";
import { textAlign } from "~/plugins/textAlign.ts";

export const galewind: Partial<Config> = {
  theme: {
    extend: {
      spacing: {
        vh: "100svb",
        vw: "100svi",
      },
    },
  },
  corePlugins: {
    height: false,
    width: false,
    size: false,
    margin: false,
    padding: false,
    inset: false,
    textAlign: false,
  },
  plugins: [
    height,
    width,
    size,
    margin,
    padding,
    inset,
    insetShort,
    textAlign,
  ],
};

import postcss from "postcss";
import taiwindcss from "tailwindcss";

import type { Config } from "tailwindcss";

export const generateUtilitiesCss = (
  preset: Partial<Config>,
  raw: string,
): Promise<string> => {
  const processor = postcss([
    taiwindcss({
      presets: [preset],
      content: [{ raw }],
    }),
  ]);
  return new Promise<string>((resolve, reject) => {
    processor
      .process("@tailwind utilities;", { from: undefined })
      .then(({ css }) => resolve(css))
      .catch((reason) => reject(reason));
  });
};

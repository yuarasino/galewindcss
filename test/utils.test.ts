import { assertEquals } from "@std/assert";
import { defineConfig } from "~/utils.ts";

import type { Config } from "tailwindcss";

Deno.test("defineConfig", () => {
  const config: Config = {
    content: [
      "src/**/*.{ts,tsx}",
    ],
  };

  const actual = defineConfig(config);

  assertEquals(actual, config);
});

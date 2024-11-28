import { assertEquals } from "@std/assert";
import { galewind } from "~/preset.ts";
import { generateUtilitiesCss } from "./utils.ts";

Deno.test("height", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "h-4 h-1/2 h-screen h-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/height.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("width", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "w-4 w-1/2 w-screen w-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/width.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("size", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "size-4 size-1/2 size-screen size-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/size.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("margin", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "m-4 my-px mt-screen -ml-screen mx-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/margin.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("padding", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "p-4 py-px pt-screen pl-screen px-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/padding.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

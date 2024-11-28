import { assertEquals } from "@std/assert";
import { galewind } from "~/preset.ts";
import { generateUtilitiesCss } from "./utils.ts";

Deno.test("height", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "h-4 h-1/2 h-vh h-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/height.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("width", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "w-4 w-1/2 w-vw w-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/width.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("size", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "size-4 size-1/2 size-vw size-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/size.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("margin", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "m-4 my-px mt-vh -ml-vw mx-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/margin.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("padding", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "p-4 py-px pt-vh pl-vw px-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/padding.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("inset", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "inset-4 inset-y-px top-vh -left-vw inset-x-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/inset.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});
Deno.test("inset", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "i-4 iy-px it-vh -il-vw ix-[5px]",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/insetShort.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

Deno.test("textAlign", async () => {
  const actual = await generateUtilitiesCss(
    galewind,
    "text-left text-right text-center text-justify",
  );

  const expected = await Deno.readTextFile(
    "./test/plugins/textAlign.css.txt",
  );

  assertEquals(actual.trim(), expected.trim());
});

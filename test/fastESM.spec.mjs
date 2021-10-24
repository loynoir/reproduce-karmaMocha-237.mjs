// simulate fast `import()` / `import`
await new Promise((r) => {
  setTimeout(() => {
    r(undefined);
  }, 1);
});

const mod = "fastESM";

describe("fastESM", () => {
  it("bar", () => {
    if (mod !== "fastESM") {
      throw new Error();
    }
  });
});

// just ensure in ESM context
export default "";

// simulate slow `import()` / `import`
await new Promise((r) => {
  setTimeout(() => {
    r(undefined);
  }, 1000);
});

const mod = "slowESM";

describe("slowESM", () => {
  it("bar", () => {
    if (mod !== "slowESM") {
      throw new Error();
    }
  });
});

// just ensure in ESM context
export default "";

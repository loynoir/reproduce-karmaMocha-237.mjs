const mod = "CJS";

describe("CJS", () => {
  it("bar", () => {
    if (mod !== "CJS") {
      throw new Error();
    }
  });
});

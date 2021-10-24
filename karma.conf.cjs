module.exports = function (config) {
  config.set({
    singleRun: true,
    plugins: ["karma-mocha", "karma-mocha-reporter", "karma-chrome-launcher"],
    frameworks: ["mocha"],
    reporters: ["mocha"],
    browsers: ["ChromeHeadless"],
    files: [
      { pattern: "test/CJS.spec.js" },
      { pattern: "test/fastESM.spec.mjs", type: "module" },
      { pattern: "test/slowESM.spec.mjs", type: "module" },
    ],
  });
};

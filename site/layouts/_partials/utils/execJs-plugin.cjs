const { spawn } = require("child_process");
const path = require("path");

const AsyncFunction = async function () {}.constructor;

module.exports = (opts = {}) => {
  return {
    postcssPlugin: "postcss-hugo-eval",
    async Once(root) {
      const code = JSON.parse(root.nodes.find((n) => n.prop === "code").value);
      const timeout = JSON.parse(
        root.nodes.find((n) => n.prop === "timeout").value ?? "0",
      );

      let output;
      console.log(`--EVAL-LOGS-BEGIN--`);
      try {
        const fn = new AsyncFunction(
          "require",
          `const module = {};\n\n${code};\n\nreturn module.exports`,
        );
        const { default: runner } = await fn(require);

        if (typeof runner !== "function") {
          throw new Error("module did not export a function");
        }

        const timeoutPromise =
          timeout > 0 &&
          new Promise((_ful, rej) =>
            setTimeout(() => rej(new Error("timeout")), timeout * 1000),
          );

        const result = await Promise.race([
          runner(),
          ...(timeoutPromise ? [timeoutPromise] : []),
        ]);
        output = { result };
      } catch (e) {
        output = { error: true, message: `${e}` };
      }

      console.log(`--EVAL-LOGS-END--`);
      console.log(
        `--EVAL-RESULT-BEGIN--${JSON.stringify(output)}--EVAL-RESULT-END--`,
      );

      process.exit(0);
    },
  };
};

module.exports.postcss = true;

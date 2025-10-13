async function doEval(code) {
  const AsyncFunction = (async () => {}).constructor;
  return await new AsyncFunction(`
let __RUN__;
${code}
return await __RUN__()`)();
}

module.exports = (opts = {}) => {
  return {
    postcssPlugin: "postcss-hugo-eval",
    async Once(root) {
      console.log(`--EVAL-LOGS-BEGIN--`);

      let output;
      try {
        const code = JSON.parse(root.nodes[0].value);
        const result = await Promise.race([
          doEval(code),
          new Promise((_ful, rej) =>
            setTimeout(() => rej(new Error("timeout")), 2000),
          ),
        ]);

        output = { result };
      } catch (e) {
        output = {
          error: true,
          message: `${e}`,
        };
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

import nodePlop from "node-plop";
import plopfile from "./plopfile";

(async () => {
  const plop = await nodePlop();
  plopfile(plop);
  const generator = plop.getGenerator("module");

  const answers = await generator.runPrompts();
  await generator.runActions(answers);
})();

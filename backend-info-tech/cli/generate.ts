import nodePlop from 'node-plop';
import plopfile from './plopfile';
import { generateIndexesForModule } from './generate-index';

(async () => {
  const plop = await nodePlop();
  plopfile(plop);
  const generator = plop.getGenerator('module');

  const answers = await generator.runPrompts();
  const results = await generator.runActions(answers);

  console.log('🟢 Arquivos gerados via Plop!');

  await generateIndexesForModule(answers.name);

  console.log('🟢 index.ts gerados com sucesso!');
})();

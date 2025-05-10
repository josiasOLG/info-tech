import * as fs from 'fs';
import * as path from 'path';

function generateIndex(folderPath: string) {
  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

  const content = files
    .map((file) => `export * from './${file.replace('.ts', '')}';`)
    .join('\n');

  fs.writeFileSync(path.join(folderPath, 'index.ts'), content);
}

function generateFolderExports(folderPath: string) {
  const items = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() ||
        (entry.name.endsWith('.ts') && entry.name !== 'index.ts'),
    );

  const content = items
    .map((entry) => {
      const name = entry.name.replace('.ts', '');
      return `export * from './${name}';`;
    })
    .join('\n');

  fs.writeFileSync(path.join(folderPath, 'index.ts'), content);
}

export function generateIndexesForModule(moduleName: string) {
  const base = `src/modules/${moduleName}`;

  const foldersToIndex = [
    `${base}/application/dto`,
    `${base}/application/usecases`,
    `${base}/domain`,
    `${base}/infra/mongoose`,
    `${base}/infra/repository`,
    `${base}/interface/http`,
    `${base}/interface/schemas`,
  ];

  const mainFoldersToExport = [
    `${base}/application`,
    `${base}/infra`,
    `${base}/interface`,
    `${base}/domain`,
  ];

  for (const folder of foldersToIndex) {
    if (fs.existsSync(folder)) {
      generateIndex(folder);
      console.log(`✅ Gerado index.ts em: ${folder}`);
    } else {
      console.warn(`⚠️ Pasta não encontrada: ${folder}`);
    }
  }

  for (const folder of mainFoldersToExport) {
    if (fs.existsSync(folder)) {
      generateFolderExports(folder);
      console.log(`✅ Gerado index.ts em: ${folder}`);
    } else {
      console.warn(`⚠️ Pasta não encontrada: ${folder}`);
    }
  }
}

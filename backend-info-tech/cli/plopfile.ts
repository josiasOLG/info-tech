import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("module", {
    description: "Gera um módulo completo com estrutura DDD",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome do módulo (ex: vehicle):",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/modules/{{kebabCase name}}",
        base: "plop-templates/module",
        templateFiles: "plop-templates/module/**",
      },
      {
        type: "add",
        path: "src/modules/{{kebabCase name}}/index.ts",
        template: `export * from "./application";
export * from "./domain";
export * from "./infra";
export * from "./interface";`,
      },
    ],
  });
}

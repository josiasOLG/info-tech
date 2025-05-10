import { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
  plop.setHelper('eq', (a: any, b: any) => a === b);

  plop.setGenerator('module', {
    description: 'Gera um módulo completo com estrutura DDD',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do módulo (ex: vehicle):',
      },
      {
        type: 'input',
        name: 'fields',
        message: 'Campos da entidade (ex: placa:string,ano:number):',
      },
    ],
    actions(data) {
      const { name, fields } = data as { name: string; fields: string };

      const fieldsArray = fields.split(',').map((field) => {
        const [key, type] = field.split(':').map((x) => x.trim());
        return { key, type };
      });

      const pascalCaseName = plop.getHelper('pascalCase')?.(name) || name;
      const camelCaseName = plop.getHelper('camelCase')?.(name) || name;

      const templateData = {
        ...data,
        pascalCaseName,
        camelCaseName,
        fieldsArray,
      };

      return [
        {
          type: 'addMany',
          destination: 'src/modules/{{kebabCase name}}',
          base: 'cli/templates/module',
          templateFiles: 'cli/templates/module/**/*',
          data: templateData,
        },
        {
          type: 'add',
          path: 'src/modules/{{kebabCase name}}/index.ts',
          templateFile: 'cli/templates/module/index.ts.hbs',
          data: templateData,
        },
      ];
    },
  });
}

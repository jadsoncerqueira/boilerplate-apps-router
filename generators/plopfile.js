module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('Componentes', {
    description: 'Criação de componentes',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ] // array of actions
  })
}

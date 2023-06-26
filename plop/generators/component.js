module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component?',
        choices: () => [
          { name: 'Atom', value: 'atoms' },
          { name: 'Molecule', value: 'molecules' },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/presentation/components/{{camelCase type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/components/{{camelCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/components/{{camelCase type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/presentation/components/{{camelCase type}}/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'append',
        path: '../src/presentation/components/{{camelCase type}}/index.ts',
        templateFile: 'templates/component/barril.ts.hbs',
        separator: '',
      },
    ],
  })
}

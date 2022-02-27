# react-hooks

## Setting up a new project (without create-react-app)

1. Execute `npm init` in the root directory. Provide the paramater -y to skip all the questions and use the default answers.
2. Add and configure prettier extension to enable auto-formatting. Steps: (1) run `npm install -D prettier` (2) create `.prettierrc` file wih the default configuration in the root directory. (3) create script to ease executing prettier (refer to commit)
3. Install prettier VSCode extension (Prettier - Code formatter by esbenp.prettier-vscode). Enable the configurations (command comma) (1) turn on Editor: Format On Save (2) turn on Prettier: Require Config
4. Add and configure eslint extension for enforce code styles (1) run `npm install -D eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks` (2) create `.eslintrc.json` file with the default configuration in the root directory (refer to commit). (3) create a script to run eslint from npm ``
5. Install ESLint extension for VSCode (ESLint by Dirk Baeumer).
6. Install babel `npm install -D @babel/core @babel/preset-react @babel/preset-env @babel/eslint-parser` and add default config in the `.babelrc` file (refer to commit)

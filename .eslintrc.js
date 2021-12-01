module.exports = {
        "extends": [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:vue/vue3-recommended',
          'plugin:angular/recommended',
          'plugin:vue/essential',
          '@vue/standard'
        ],
    "plugins": [
      "react",
      "vue",
      "vue3",
      "angular"
    ],
    root: true,
    env: {
      browser: true,
      es2021: true,
      es6: true,
      node: true
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      semi: 0,
      'no-unused-vars': 0,
      'no-undef': 0,
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-constant-condition': 0,
    }
};

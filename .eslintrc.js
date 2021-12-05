module.exports = {
<<<<<<< Updated upstream
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
      "angular"],
=======
>>>>>>> Stashed changes
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "node": true
    },
<<<<<<< Updated upstream
     "parserOptions": {
=======
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
>>>>>>> Stashed changes
        "ecmaVersion": 10,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
<<<<<<< Updated upstream
    rules: {
      semi: 0,
      'no-unused-vars': 0,
      'no-undef': 0,
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-constant-condition': 0,
=======
    "plugins": [
        "vue"
    ],
    "rules": {
>>>>>>> Stashed changes
    }
}
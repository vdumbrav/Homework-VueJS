module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'prettier',
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 7 }],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['a', 'li', 'router-link'],
      },
    ],
    'comma-dangle': [
      'off',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'semi': ['error', 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

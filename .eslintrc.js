module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/standard',
    'eslint:recommended',
    'standard',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
  plugins: ['prettier', 'standard', 'vue'],
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
    'space-before-function-paren': ['error', 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

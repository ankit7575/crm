module.exports = {
  parser: '@babel/eslint-parser', // Use Babel parser
  parserOptions: {
    ecmaVersion: 2020, // Allow ES2020 syntax
    sourceType: 'module', // Use ES modules (import/export)
    ecmaFeatures: {
      jsx: true, // Enable JSX for React components
    },
    requireConfigFile: false, // Don't require a Babel config file (helps with simpler setups)
  },
  env: {
    browser: true,
    node: true,
    es2020: true, // Enable ECMAScript 2020 globals
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', 'jest'],
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'warn',
    'node/no-unsupported-features/es-syntax': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};

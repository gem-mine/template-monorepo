const path = require('path')

module.exports = {
  ignorePatterns: [
    'dist',
    'node_modules',
    'es',
    'lib',
    '__test__'
  ],
  root: true,
  extends: ['@gem-mine/recommend-ts'],
  parserOptions: {
    tsconfigRootDir: path.resolve(__dirname),
    project: './tsconfig.json',
    createDefaultProgram: true
  },
  rules: {
    'import/prefer-default-export': 'off'
  }
}

module.exports = {
  preset: 'ts-jest',
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/packages/**/__test__/**/*test.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/']
}

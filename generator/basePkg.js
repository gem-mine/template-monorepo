module.exports = {
  "name": "root",
  "version": "0.0.1",
  "private": true,
  "devDependencies": {
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "@commitlint/config-lerna-scopes": "^11.0.0",
    "@gem-mine/babel-preset-app": "^3.2.0",
    "@gem-mine/cli-plugin-eslint": "^3.2.9",
    "@gem-mine/cli-plugin-jest": "^1.6.4",
    "@gem-mine/cli-plugin-typescript": "^2.7.3",
    "@gem-mine/eslint-config-recommend-ts": "^3.1.13",
    "@gem-mine/script-rollup": "^1.5.7",
    "@types/jest": "^26.0.16",
    "commitizen": "^4.2.2",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^7.15.0",
    "husky": "^4.3.0",
    "jest": "^26.6.3",
    "lerna": "^3.22.1",
    "lint-staged": "^10.5.3",
    "ts-jest": "^26.4.4"
  },
  "scripts": {
    "build": "lerna run build",
    "lerna:publish": "lerna publish from-package",
    "lerna:version": "lerna version --conventional-commits -m \"chore: publish %v\"",
    "lint": "gmsr lint packages --ext .ts",
    "lint:fix": "gmsr lint packages --ext .ts --fix",
    "test": "yarn build && gmsr test:unit"
  },
  "workspaces": [
    "packages/*"
  ],
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "packages/**/*.{ts,tsx}": [
      "gmsr lint packages --ext .ts --fix"
    ]
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}

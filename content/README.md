# `template-monorepo`
用于开发 monorepo 的脚手架，适用于 sdk 开发

## 开发

```bash
  yarn
```

- 添加 packages 内相互依赖
```
  yarn workspace moduleA add moduleB@<version> // packages 内依赖必须带版本号
```

- 代码检查

```bash
  yarn lint
  yarn lint:fix
```

- 单元测试

```bash
  yarn test
```

- 代码提交

```bash
  git add <影响的代码文件>
  npx cz
```

- 构建

```bash
  yarn build
```

- 本地测试

```bash
  # link
  npx lerna exec -- yarn link

  # unlink
  npx lerna exec -- yarn unlink
```

## 发布

```bash
  yarn lerna:version -- <version|major|minor|patch>
  yarn lerna:publish
```
# 研发过程的操作

### 使用 Demo 预览效果

- 进入目录 apps/demo
- 运行：

```shell
npm run dev
```

### 发布

- 修改版本号，全局查找替换："version": "0.0.6", 替换为新版本
- 执行发布

```shell
npm run release
```

### 删除当前目录及所有子目录下的 node_modules 目录

```shell
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
```

### 安装依赖

```shell
pnpm i
```

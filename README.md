# Egg-nunjucks-tpl



本项目的主要目的是展示如何使用 Egg + Webpack 搭建一套前后端统一的开发环境，主要包括：

- 后端 Node.js 使用 Egg 框架
- 前端使用基于 webpack 的工作流，与具体框架无关
- 开发过程中无需分别启动前端与后端应用（基于 egg-webpack 模板 nunjucks）

## 1. 快速使用

1. clone 本项目

```shell
git clone [https://github.com/keenwon/Egg-Webpack-Starter.git](https://github.com/minqun/egg-webpack.git)]
```

2. 本地开发

```shell
npm intall && npm run dev
```


1. 应用部署

```shell
# 构建前端静态资源
npm run build

# 启动应用
npm start

# 停止应用
npm stop
```

## 2. 目录结构

```shell
.
├── app                 # 服务端代码
│   ├── controller      # egg controller
│   ├── components      # egg 公共模板
│   ├── middleware      # 中间件
│   ├── public          # 静态资源目录
│   │   ├── static      # 前端 build 输出
│   │   ├── util        # 公共脚本文件
│   │   ├── images      #图片资源
│   └── view            # egg view
├── client              # 客户端代码
│   ├── webpack.common  # webpack config
│   ├── webpack.dev
│   └── webpack.prod
├── logs                # 日志

```
### 备注
```shell
....
Demo index

```

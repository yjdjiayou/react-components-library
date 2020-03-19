react-ts-project-template
├── babel.config.js
├── build
│ ├── webpack.base.config.js # Webpack 基础配置文件
│ ├── webpack.dev.config.js # Webpack 开发环境配置文件
│ ├── webpack.dll.config.js # Webpack dll 缓存依赖配置文件
│ ├── webpack.html.config.js # Webpack 页面依赖配置文件
│ └── webpack.prod.config.js # Webpack 生产环境配置文件
├── package-lock.json # 锁定 npm 包依赖版本文件
├── package.json
├── postcss.config.js # 自动兼容 CSS3 样式配置文件
├── prettier.config.js # 检查项目代码风格配置文件
├── public # 存放不会被 Webpack 处理的静态资源文件
│ └── dll # Webpack dll 缓存包存放目录
├── README.md
├── src
│ ├── assets # 存放会被 Webpack 处理的静态资源文件
│ │ ├── fonts # iconfont 目录
│ │ ├── images # 图片资源目录
│ │ └── styles # 全局样式目录
│ ├── common # 存放项目通用文件
│ │ ├── event-center.ts # 事件中心
│ │ └── global-context.ts # 全局上下文
│ ├── components # 项目中通用的业务组件目录
│ ├── config # 项目配置文件
│ ├── custom-hooks # 项目中通用的自定义 hooks 目录
│ ├── d.ts # 项目中 TS 声明文件目录
│ │ ├── global.d.ts # 项目中全局的 TS 声明文件
│ │ └── rematch-store.d.ts # 针对 rematch 的 TS 声明文件
│ ├── entry # 项目入口文件
│ │ ├── App.css
│ │ ├── App.tsx
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ └── index.tsx
│ ├── library # 组件库
│ ├── routes # 路由目录
│ │ ├── route-loader.tsx # 路由转化器
│ │ └── routes-config.tsx # 路由配置入口文件
│ ├── services # 和后端相关的文件目录
│ │ ├── api # 调用后端接口定义目录（统一维护）
│ │ │ ├── index.ts
│ │ ├── axios.ts # 基于 axios 二次封装
│ │ ├── config.ts # 端口配置文件
│ ├── store
│ │ ├── connect.ts # 针对 react-redux 中的 connect 类型声明
│ │ ├── history.ts
│ │ ├── index.ts
│ │ └── models # 数据模型目录
│ ├── utils # 全局通用工具函数目录
│ └── views # 页面视图层
│ │ ├── home
│ │ │ ├── home.less
│ │ │ └── Home.tsx
│ │ ├── login
│ │ │ ├── login.less
│ │ │ └── Login.tsx
│ │ └── register
│ │ │ ├── register.less
│ │ │ └── Register.tsx
└── tsconfig.json # TS 配置文件

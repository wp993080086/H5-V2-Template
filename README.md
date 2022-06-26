<div align=center>
  
![webPack](https://img.shields.io/badge/5.54.0-webPack-orange)
![Vue](https://img.shields.io/badge/2.6.14-Vue-brightgreen)
![Axios](https://img.shields.io/badge/0.27.2-Axios-ff69b4)
![Vue-Router](https://img.shields.io/badge/3.5.4-Vue%20Router-blueviolet)
![Vuex](https://img.shields.io/badge/3.6.2-Vuex-yellow)
![Vant](https://img.shields.io/badge/2.12.48-Vant-409EFF)
![Sass](https://img.shields.io/badge/1.53.0-Sass-orange)
  
</div>

# ⚡️ 简介

一个开箱即用的 `webpack 5` + `Vue 3` + `Vant 2` + `Vuex` + `Vue-Router 3` 的PC端项目模板，搭配有 `eslint` 代码检查修复，`git` 推送检查钩子 `Husky`。

# 🚀 开发

1. 安装

```
npm install
```

2. 运行

```
npm run serve
```

# 📦️ 多环境打包

- 测试环境打包

```
npm run build_test
```

- 生产环境打包

```
npm run build
```

# 🔧 代码修复

- 自动修复

```
npm run lint-fix
```

# 📚 目录

```
├─ .env.xxx // 各环境的配置文件
├─ .eslintrc.js // eslint配置
├─ vue.config.js // vue配置
└─ src
  │─ App.vue // 根容器
  │─ main.js
  │  
  ├─ components // 组件
  │      
  ├─ pages // 页面
  │                          
  ├─ router // 路由
  │          
  ├─ services // 接口
  │   │  
  │   │─ request // 封装
  │   └─ api // 接口
  │      
  ├─ static // 静态资源
  │              
  ├─ store // vuex
  │      
  └─ utils // 工具库
  │ │  index.js
  │ │  loading.js // loading封装
  │ │  toast.js // 弹窗封装  
  │ └─
  │......
```
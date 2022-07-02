# 一个开箱即用的的PC端项目模板

<div align=center>
  
![webpack](https://img.shields.io/badge/5.54.0-webpack-orange)
![vant](https://img.shields.io/badge/2.12.48-vant-409EFF)
![sass](https://img.shields.io/badge/1.53.0-sass-orange)
  
</div>

<div align=center>
  
![vue](https://img.shields.io/badge/2.6.14-vue-brightgreen)
![axios](https://img.shields.io/badge/0.27.2-axios-ff69b4)
![vue-router](https://img.shields.io/badge/3.5.4-vue%20router-blueviolet)
![vuex](https://img.shields.io/badge/3.6.2-vuex-yellow)
  
</div>

## 🚀 开发

1. 安装

```
npm install
```

2. 运行

```
npm run serve
```

## 📦️ 多环境打包

- 测试环境打包

```
npm run build_test
```

- 生产环境打包

```
npm run build
```

## 🔧 代码修复

- 自动修复

```
npm run lint-fix
```

## 📚 目录

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

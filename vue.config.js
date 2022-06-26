const baseURL = process.env.VUE_APP_URL
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const resolve = (dir) => path.join(__dirname, '.', dir)
const productionGzipExtensions = ['js', 'css']

// 导入全局scss
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/static/styles/common.scss')
      ]
    })
}

const CDN = {
  css: [
    'https://unpkg.com/vant@2.12.48/lib/index.css',
  ],
  js: [
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.14/vue.runtime.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vue-router/3.5.4/vue-router.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vuex/3.6.2/vuex.min.js',
    'https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.min.js',
    'https://unpkg.com/vant@2.12.48/lib/vant.min.js',
  ]
};

const objExternals = {
  vue: 'Vue',
  axios: 'axios',
  vuex: 'Vuex',
  'vue-router': 'VueRouter',
  vant: 'vant'
}

module.exports = {
  publicPath: './',
  outputDir: process.env.VUE_APP_BASE_OUTPUTDIR,
  assetsDir: 'assets',
  lintOnSave: true,
  productionSourceMap: false, // 不需要生产环境的 source map
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    // 配置，将当前页定义的cdn值传到主页面（index.html）
    config.plugin('html').tap(args => {
    // 这里我是除本地环境，其余均使用CDN，可自己选择是否配置
      args[0].cdn = process.env.VUE_APP_STAGE === 'development' ? {} : CDN
      return args
    })
  },
  configureWebpack: {
    devServer: {
      open: false,
      host: 'localhost',
      port: '8600',
      hot: true,
      proxy: {
        '/api': {
          target: baseURL,
          secure: false,
          changeOrigin: true, // 开启代理
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      // 别名
      alias: {
        '@': resolve('src')
      }
    },
    // 定义webpack打包配置
    externals: process.env.VUE_APP_STAGE === 'development' ? {} : objExternals,
    plugins: [
      // 配置compression-webpack-plugin压缩ZIP加速
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        // eslint-disable-next-line
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets: false // 删除原文件
      }),
      // build时生成打包报告
      new BundleAnalyzer({
        analyzerMode: 'disabled', // 启用 server 不启用 disabled
        openAnalyzer: false, // 是否自动打开报告页面
        analyzerPort: 9999 // 报告页面端口
      })
    ]
  }
}

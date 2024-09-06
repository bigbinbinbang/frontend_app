const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    },
    plugins: [
      // 打包分析插件，需要分析时解开注释
      // [new BundleAnalyzerPlugin()]
    ],
    configure: (webpackConfig) => {
      // 生产环境配置
      if (isProd) {
        // 去除map文件
        webpackConfig.devtool = false
        // 拆包
        webpackConfig.optimization = {
          splitChunks: {
            chunks: 'async',
            minSize: 40000, // bite
            maxAsyncRequests: 10, // 最大异步请求数
            maxInitialRequests: 10, // 页面初始化最大异步请求数
            automaticNameDelimiter: '~', // 解决命名冲突
            name: false,
            cacheGroups: {
              antd: {
                name: 'chunk-antd',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](@ant-design|antd-mobile)[\\/]/,
                priority: -7
              },
              common: {
                name: 'chunk-common',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-redux|react-router-dom|redux-persist|react-fastclick)[\\/]/,
                priority: -9
              },
              vendor: {
                name: 'chunk-vendor',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](axios|lodash|core-js|react-copy-to-clipboard|crypto-js|web-vitals)[\\/]/,
                priority: -10
              }
            }
          }
        }
      }
      return webpackConfig
    }
  },
  babel: {
    plugins: [
      // 生产环境只留console.error、warn，去除console.log
      [
        'babel-plugin-transform-remove-console',
        { exclude: process.env.NODE_ENV === 'production' ? ['error', 'warn'] : ['error', 'warn', 'log'] }
      ]
    ]
  },
  devServer: {
    port: 8888,
    hot: true,
    client: {
      overlay: false
    },
    // 配置代理解决跨域
    proxy: {
      '/api': {
        target: 'https://test2.365trade.com.cn/zzlh-gateway',
        ws: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}

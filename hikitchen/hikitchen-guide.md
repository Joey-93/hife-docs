# HiKitchen 指南

「玩途旅行」大后厨前端开发框架及UI组件库。`Powered by Vue.js`

<br>
<br>
********************
<br>

## 5步起飞

##### 1. 安装Node.js及Npm环境。

##### 2. Npm全局安装Webpack。
``` shell
sudo npm i webpack -g
```

##### 3. 安装项目依赖。
``` shell
cd [your path]/hitour/themes/kitchen
sudo npm i
```

##### 4. 创建本地的前端开发服务器配置文件。
``` shell
cd [your path]/hitour/themes/kitchen/config
vim index.js
```
然后使用`:set paste`将下面的内容复制进去, 或者直接把文件拷贝进去。
``` javascript
var path = require('path')

var common_proxy = {
  //target       : 'http://test.hitour.cc',
  //target       : 'http://sandbox.hitour.cc',
  target: 'http://trial.hitour.cc',
  // target       : 'http://hitour.host',
  changeOrigin: true,
  pathRewrite: {}
};

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/themes/kitchen/dist/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 60003,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/admin/': common_proxy,
      '/chef/': common_proxy,
      '/themes': common_proxy,
      '/markMi/': common_proxy
    },
    cssSourceMap: false
  }
}

```

##### 5. 开发
``` shell
npm run dev
```
现在你就可以在localhost:10003/k/sign_in玩耍了。

##### 6. 发布
``` shell
npm run build
```
在本地或远程服务器做发布之前, 需要确认Yii的路由配置。

<br>
<br>
********************
<br>

## 10分钟爽完第一次

Comming soon.
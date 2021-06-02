//使用gzip压缩（需服务端<nginx>同时开启gzip_static功能）//注意：最好安装6.x以前版本否则会报错
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

//显示打包进度
const WebpackBar = require('webpackbar');

module.exports = {
    publicPath: '/', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
    outputDir: 'dist', //标识是打包哪个文件
    productionSourceMap: false,
    devServer: {
      open: true, // 项目构建成功之后，自动弹出页面
      host: 'localhost', // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
      port: 8081, // 端口号，默认8080
      https: false, // 检查证书协议
      //跨域代理
      proxy: {
          '/api':{
            target:'https://t.stoooges.cn',//目标服务器地址
            secure:true,//如果是https接口需要配置此参数
            changeOrigin:true,//允许跨域
            timeout:5000,//设置超时时间cls
            pathRewrite:{
                "^/api":""
            }
          }
      }
    },
    css: {
        loaderOptions: {
            sass: {
                // 根据自己样式文件的位置调整
                prependData: `@import "@/assets/css/base.scss";`//新版scss-loader(8.0及以上)
                // data:`@import "@/assets/css/base.scss";`//旧版sass-loader写法(8.0以下)
            }
        }
    },
    configureWebpack: config =>{
        const plugs = [
            new WebpackBar()
        ];
        if(process.env.NODE_ENV === 'production'){
            plugs.push(
                new CompressionPlugin({
                    filename: '[path].gz[query]',//压缩后的文件名
                    algorithm: 'gzip', //压缩算法/功能
                    test: productionGzipExtensions, //匹配项目文件，以js或者以css结尾的才执行压缩
                    threshold: 10240, //仅处理大于此大小的资产（以字节为单位）
                    minRatio: 0.8, //仅压缩比该比率更好的资产（minRatio = Compressed Size / Original Size）
                    deleteOriginalAssets: false //是否删除原始文件
                })
            )
        }
        return{
            plugins:plugs
        }
    }
};
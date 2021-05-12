import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 引入bus
 * 官方删除了$on和￥off,并推荐借助第三方插件例如mitt。
 * 1、需安装npm i mitt -S
 * 2、实例化mitt. ,详见bus.js
 * 3、注意直接使用on,off,或emit即可删除了$符合
 */
import Bus from './store/bus';

/**
 * 引入element-ui
 * 按需引入
 * 1、安装element-plus
 * 2、安装 babel-plugin-import 插件
 * 3、babel.config.js中配置
 * 4、主入口文件引入全局样式，如果是用css文件则不需要全局引入
 * 5、引入组件名
 */
// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'
import { ElButton,ElSelect } from 'element-plus';

/**
 * 引入接口服务文件
 */
import httpServe from './server';

const app = createApp(App);

app
.use(store)
.use(router)
.use(ElButton)
.use(ElSelect)
.mount('#app')

/**
 * 3将Vue.prototype替换为app.config.globalProperties，并删除了vue
 */
app.config.globalProperties.$bus = Bus;
app.config.globalProperties.$https = httpServe;
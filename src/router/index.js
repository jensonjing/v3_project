import { createRouter, createWebHistory } from 'vue-router'
import routes from './route';
import store from '../store'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

/** 
 * to表示即将进入的页面路由，
 * from表示当前导航正要离开的路由
 * next:Function:执行效果依赖next方法的调用参数。
 * next():进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed（确认的）。
 * next(false):中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么URL地址会重置到from路由对应的地址。
 * next('/')或者next({ path: '/' }):跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
 * next(error):(2.4.0+)如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调。
*/
router.beforeEach((to, from, next) => {
  //console.log(to);
  //console.log(from);
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  //登录状态
  const status = JSON.parse(sessionStorage.getItem('login'));
  const isLogin = store.state.loginstate || status;
  if (isLogin){
    next();
  }else{
    document.title='登录';
    if (to.fullPath == "/Login") {
      next();
    }else if(to.path == "/Bind"){
      next();
    }else if(to.path =='/Forgetpassword'){
      next();
    }else{
      next({path: '/Login'})
    }
  }
});
/**
* 在渲染该组件的对应路由被 confirm 前调用
* 不能获取组件实例 `this`
* 因为当钩子执行前，组件实例还没被创建
*/
// router.beforeRouteEnter((to, from, next)=>{
  
// })
/**
* 在当前路由改变，但是该组件被复用时调用
* 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
* 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
* 可以访问组件实例 `this`
*/
// router.beforeRouteUpdate((to, from, next)=>{

// })
/**
* 导航离开该组件的对应路由时调用
* 可以访问组件实例 `this`
*/
// router.beforeRouteLeave((to, from, next)=>{

// })

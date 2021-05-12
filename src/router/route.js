const routes = [
    {
        path:'/',
        redirect: "/Login"
    },
    {
        path: '/Login',
        name: 'Login',
        meta: { 
            title: "登录" ,
            keepAlive: false,//需要缓存
        },
        component: ()=>import('@/views/Login.vue')
    },
    {
        path: '/Home',
        name: 'Home',
        meta: { 
            title: "首页" ,
            keepAlive: false,//需要缓存
        },
        component: ()=>import('@/views/Home.vue')
    },
    {
        path: '/about/:id',
        name: 'About',
        meta: { 
            title: "关于我们" ,
            keepAlive: false,//需要缓存
        },
        component: ()=>import('@/views/About.vue'),
        children:[]
    }
];

export default routes;
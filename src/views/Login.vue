<template>
    <div>
        <el-button @click="LoginIn">登录</el-button>
    </div>
</template>

<script>
export default {
    name:'',
    components: {

    },
    computed: {

    },
    data(){
        return{

        }
    },
    created() {

    },
    mounted() {

    },
    activated() {//该钩子在进入当前路由时执行

    },
    deactivated (){//该钩子在离开当前路由时执行

    },
    watch: {

    },
    methods: {
        LoginIn(){
            this.$bus.emit('login',true);
            sessionStorage.setItem('login',true);
            this.$router.push({
                path:'/Home'
            })
        }
    }
}
</script>

<style lang='scss'>

</style>
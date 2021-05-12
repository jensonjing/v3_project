<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="goHome">首页</el-button>
  </div>
</template>

<script>

export default({
  data() {
    return{

    }
  },
  created() {
    // const query = this.$route;
    // console.log(query);
  },
  methods:{
    goHome(){
      this.$router.push({
        path:'/Home'
      })
    }
  }
})
</script>


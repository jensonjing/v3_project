<template>
  <div class="hello">
    <div>{{msg}}</div>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="primary" round @click="goAbout">跳转</el-button>
    <el-button type="primary" round @click="goParent">向父组件传参</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    this.$bus.on('set',res=>{
      console.log(res);
    })
  },
  methods:{
    goAbout(){
      this.$router.push({
        name:'About',
        params:{
          id:2
        }
      })
    },
    goParent(){
      this.$emit('goname','参数');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <div>{{msg}}</div>
    <el-button type="primary" round @click="goParent">向父组件传参</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    this.$bus.on('set',res=>{
      console.log(res);
    })
  },
  mounted(){
    
  },
  beforeUnmount(){//组件销毁前清除事件绑定及定时器等
    this.$bus.all.clear();
  },
  methods:{
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

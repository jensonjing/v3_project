<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" @goname='goname'/>
    <el-button @click="subdata">提交</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.getData();
  },
  methods:{
    subdata(){
      this.$bus.emit('set',2);
    },
    getData(){
      this.$https.getidentity({}).then(res=>{
        console.log(res)
      })
    },
    goname(data){
      console.log(data);
    }
  }
}
</script>

<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" @goname='goname'/>
    <el-button type="primary" round @click="goAbout">跳转及bus传参</el-button>
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
    getData(){
      this.$https.getidentity({}).then(res=>{
        console.log(res)
      })
    },
    goname(data){
      console.log(data);
    },
    goAbout(){
      this.$bus.emit('set',2);
      this.$router.push({
        name:'About',
        params:{
          id:2
        }
      })
    }
  }
}
</script>

<template>
  <div id="app">
    
    <header-compo></header-compo>
    <router-view/>
    <footer-compo></footer-compo>
  </div>
</template>

<script>
import HeaderCompo from './components/headerCompo.vue';
import FooterCompo from './components/footerCompo.vue';

export default {
  name: 'index',
  data() {
    return {
      // mainjsdata: "$maont 란 뭘하는 것인가? 왜 main.js의 creaed()는 동작하고 ,app.vue 의 created()는 동작 안하는가 안하는게 아니라 사실 콜솔에만 안보이는 건가?"
    }
  },
  components:{
      HeaderCompo,
      FooterCompo,
  },
  created(){
    console.log(" app.vue 의 cread의 log");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

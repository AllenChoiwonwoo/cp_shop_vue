<template>
  <div class="home">
    <test-vue></test-vue>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TestVue from '../components/TestVue.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TestVue,
  }
}
</script>

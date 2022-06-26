<template>
  <div class="home_box">
    <h1>{{ msg }}</h1>
    <HelloWorld msg="Hello World" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: '首页home'
    }
  }
}
</script>

<style scoped lang="scss"></style>

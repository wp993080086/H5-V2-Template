<template>
  <div id="app">
    <page-slide indexPagePath="/login">
      <router-view />
    </page-slide>
  </div>
</template>

<script>
import pageSlide from '@/components/page-slide'

export default {
  name: 'App',
  components: {
    pageSlide
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>

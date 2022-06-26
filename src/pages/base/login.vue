<template>
  <div class="login_box">
    <h1>Login</h1>
    <router-link to="/home" custom v-slot="{ navigate }">
      <h1 @click="navigate" role="link">去首页</h1>
    </router-link>
    <router-link to="/demo" custom v-slot="{ navigate }">
      <h1 @click="navigate" role="link">查看demo</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="scss">
.login_box {
  @include cursor_hand;
  width: 100%;
  height: auto;
  h1 {
    line-height: 100px;
  }
}
</style>

<template>
  <div class="login_box">
    <van-button type="info" @click="handleToast(0)">普通Toast</van-button>
    <van-button type="success" @click="handleToast(1)">成功Toast</van-button>
    <van-button type="danger" @click="handleToast(2)">失败Toast</van-button>
    <van-button type="danger" @click="showLoading">Loading</van-button>
    <br />
    <van-button plain @click="handleAlert">Alert</van-button>
    <van-button type="primary" plain @click="handleConfirm">Confirm</van-button>
    <van-button type="success" plain @click="handleNotify">Notify</van-button>
    <van-button type="info" plain @click="openHomePage">打开首页</van-button>
    <br />
    <h1>{{ getB }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { toast, alert, confirm, notify } from '@/utils/toast'
import Loading from '@/utils/loading'

export default {
  name: 'Login',
  mounted() {
    this.handleVueX()
    this.handleMapState()
    this.handleMapGetters()
  },
  computed: {
    ...mapState(['base']),
    ...mapGetters('base', ['getB'])
  },
  methods: {
    showLoading() {
      Loading.show()
      setTimeout(() => {
        Loading.hide()
      }, 3000)
    },
    // toast
    handleToast(type) {
      toast('这是Toast提示', type)
    },
    // alert
    handleAlert() {
      alert('确认删除吗？')
        .then(() => {
          toast('你点了确认')
        })
        .catch(() => {
          toast('你点了关闭')
        })
    },
    // confirm
    handleConfirm() {
      confirm('是否确认删除？')
        .then(() => {
          toast('你点了确认')
        })
        .catch(() => {
          toast('你点了取消')
        })
    },
    // notify
    handleNotify() {
      notify('通知通知通知', 0)
    },
    // 新开页面
    openHomePage() {
      const path = this.$router.resolve({
        name: 'Home',
        query: {
          id: '123'
        }
      })
      window.open(path.href, '_blank')
    },
    // 去登陆页
    toHmoe() {
      this.$router.push({
        name: 'Login',
        query: {
          id: '123',
          type: 'edit'
        }
      })
    },
    // 使用vuex读取state
    handleVueX() {
      console.log(this.$store.state.base.b)
    },
    // 使用mapState映射vuex
    handleMapState() {
      console.log(this.base.b)
    },
    // 使用mapGetters映射getters
    handleMapGetters() {
      console.log(this.getB)
    }
  }
}
</script>

<style scoped lang="scss">
.login_box {
  padding: 20px;
}
</style>

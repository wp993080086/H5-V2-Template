<template>
  <transition :name="directionName">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'PageSlide',
  props: {
    // 首页路由path
    indexPagePath: {
      type: String,
      default: '/',
      required: true
    }
  },
  data() {
    return {
      directionName: '', // 页面切换方向：slide-left左滑前进、slide-right右滑后退
      routeStack: [] // 存储路由栈
    }
  },
  watch: {
    $route(val) {
      this.handleRouteChange(val)
    }
  },
  created() {
    this.routeStack = this.getSessionRouteStack() || [{ path: this.indexPagePath }]
  },
  methods: {
    handleRouteChange(to) {
      const len = this.routeStack.length
      const currentRoute = this.routeStack[len - 1]
      // 判断是否是刷新路由
      if (currentRoute.path !== to.path) {
        if (len === 1) {
          // 初次打开非首页路由，前进
          this.setPageForward(to)
        } else {
          // len > 1
          const lastRoute = this.routeStack[len - 2]
          if (lastRoute.path === to.path) {
            // 打开上一页路由，后退
            this.setPageBack(currentRoute)
          } else if (to.path === this.indexPagePath) {
            // 中途打开首页，后退，重置路由栈
            this.setDirectionName('slide-right')
            this.resetRouteStack()
          } else {
            // 常规情况，前进
            this.setPageForward(to)
          }
        }
      }
    },
    // 前进
    setPageForward(route) {
      this.setDirectionName('slide-left')
      this.pushRouteStack(route)
    },
    // 后退
    setPageBack() {
      this.setDirectionName('slide-right')
      this.popRouteStack()
    },
    // 设置页面方向
    setDirectionName(name) {
      this.directionName = name
    },
    // 重置
    resetRouteStack() {
      this.routeStack = [{ path: this.indexPagePath }]
      this.setSessionRouteStack()
    },
    pushRouteStack(route) {
      const { path } = route
      this.routeStack.push({ path })
      this.setSessionRouteStack()
    },
    popRouteStack() {
      this.routeStack.pop()
      this.setSessionRouteStack()
    },
    setSessionRouteStack() {
      try {
        sessionStorage.setItem('routeStack', JSON.stringify(this.routeStack))
      } catch (error) {
        console.warn('storage is not supported')
      }
    },
    getSessionRouteStack() {
      const str = sessionStorage.getItem('routeStack')
      if (!str) {
        return null
      }
      let val = []
      try {
        val = JSON.parse(str)
      } catch (error) {
        console.warn('parse routeStack wrong')
      }
      return val
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  position: absolute;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>

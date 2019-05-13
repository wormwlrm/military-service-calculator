<template>
  <div id="app">
    <el-container>
      <el-header height="40px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sider></Sider>
        </el-aside>
        <el-main>
          <transition name="fade" mode="out-in" :duration="300">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '../views/layout/Header';
import Sider from '../views/layout/Sider';

export default {
  components: {
    Sider,
    Header
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 500px;
  height: 300px;
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

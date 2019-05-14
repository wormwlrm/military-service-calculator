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
          <el-collapse-transition>
            <router-view></router-view>
          </el-collapse-transition>
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

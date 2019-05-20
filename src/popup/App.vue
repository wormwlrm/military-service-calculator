<template>
  <div id="app">
    <!-- <el-header height="40px">
        <Header></Header>
      </el-header> -->
    <el-container>
      <el-aside :width="LAYOUT.SIDER_WIDTH">
        <Sider></Sider>
      </el-aside>
      <el-main>
        <el-collapse-transition>
          <router-view></router-view>
        </el-collapse-transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { LAYOUT } from '../utils';
// import Header from '../views/layout/Header';
import Sider from '../views/layout/Sider';

export default {
  components: {
    Sider
    // Header
  },

  data() {
    return {
      LAYOUT
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 500px;
  height: 350px;
  overflow: auto;
}
</style>

<style lang="scss">
.el-date-editor.el-input {
  width: 100%;
}

.el-date-picker {
  left: 160px !important;
  width: 350px;
  height: 100vh;

  .el-picker-panel__content {
    width: calc(100% - 30px);
  }
}
</style>

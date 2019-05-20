<template>
  <div id="app">
    <!-- <el-header height="40px">
        <Header></Header>
      </el-header> -->
    <el-container>
      <el-aside>
        <Sider></Sider>
      </el-aside>
      <el-main class="main">
        <Content></Content>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { LAYOUT } from '../utils';
// import Header from '../views/layout/Header';
import Sider from '../views/layout/Sider';
import Content from '../views/layout/Content';

export default {
  components: {
    Sider,
    Content
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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
@import '../style/global.scss';

#app {
  font-family: 'Noto Sans KR', sans-serif;
  width: $app-width;
  height: $app-height;
  overflow: auto;
  background-image: linear-gradient(90deg, #f2f6fc, #e4e7ed);

  .full-height {
    height: 100%;

    &.aside {
      background-color: white;
      border-right: solid 1px #e6e6e6;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
  }
}
</style>

<style lang="scss">
@import '../style/global.scss';

.el-aside {
  max-width: $sider-width;
  min-height: $app-height;
  overflow: hidden;
  border-right: solid 1px #e6e6e6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-main {
  padding: 0 20px;
}

.el-date-editor.el-input {
  width: 100%;
}

.el-divider--horizontal {
  margin: 18px 0;
}

.el-date-picker {
  left: 160px !important;
  width: 330px;
  height: 330px;
  top: 8px !important;
  margin-top: 0 !important;
  transform: scale(0.95);
  transition: transform 0s;

  .el-picker-panel__content {
    width: calc(100% - 30px);
  }

  .popper__arrow {
    display: none;
  }
}
</style>

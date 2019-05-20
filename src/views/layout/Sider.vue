<template>
  <div id="sider">
    <el-menu
      :default-active="defaultActive"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/">
        <i class="el-icon-odometer"></i>
        <span>전역일</span>
      </el-menu-item>
      <el-menu-item index="/option">
        <i class="el-icon-setting"></i>
        <span>설정</span>
      </el-menu-item>
      <el-menu-item index="/about">
        <i class="el-icon-bell"></i>
        <span>정보</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  computed: {
    defaultActive() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/global.scss';

#sider {
  position: relative;
  width: $sider-width;
  height: $sider-height;
  background-color: white;
}
</style>

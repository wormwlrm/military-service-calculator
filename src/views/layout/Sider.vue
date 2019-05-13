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
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
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
#sider {
  width: 150px;
  position: relative;
}
</style>

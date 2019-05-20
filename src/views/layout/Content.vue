<template>
  <div id="content">
    <h2>{{ $route.name }}</h2>
    <el-card>
      <el-collapse-transition>
        <router-view></router-view>
      </el-collapse-transition>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

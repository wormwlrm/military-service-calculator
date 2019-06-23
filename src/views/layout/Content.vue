<template>
  <div id="content">
    <h2>{{ $route.name }}</h2>
    <el-card class="content-card" v-loading="loading">
      <el-collapse-transition>
        <router-view></router-view>
      </el-collapse-transition>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },

  watch: {
    route() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 400);
    }
  },

  computed: {
    route() {
      return this.$route.name;
    }
  },

  methods: {},

  mounted() {}
};
</script>

<style lang="scss" scoped>
.content-card {
  min-height: 270px;
  overflow: auto;
  margin-bottom: 30px;
}
</style>

<template>
  <div id="app" :class="themeType === 'dark' ? 'dark' : ''">
    <!-- <el-header height="40px">
        <Header></Header>
    </el-header>-->
    <el-container v-loading="loading">
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
      loading: false,
      themeType: this.$store.state.themeType
    };
  },

  created() {
    chrome.storage.sync.get(null, result => this.init(result));
    this.$root.$on('updated', () => {
      chrome.storage.sync.get(null, result => this.init(result));
    });
  },

  beforeDestroy() {
    this.$root.$off('updated');
  },

  methods: {
    init(result) {
      try {
        this.loading = true;
        if (result) {
          Object.keys(result).forEach(key => {
            if (typeof this.$store.state[key] !== 'undefined') {
              this.$store.state[key] = result[key];
            }
          });
        } else {
          throw new Error('Fail to load data');
        }
        this.$root.$emit('loaded:component');
        this.$root.$emit('loaded:sider');
        this.loading = false;
      } catch (e) {
        console.error(e);
      } finally {
        console.log('store finished: ', this.$store.state);
      }
    }
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

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #ebeef5;
  }

  &::-webkit-scrollbar-thumb {
    background: #c0c4cc;
  }

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

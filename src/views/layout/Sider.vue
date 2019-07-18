<template>
  <div id="sider">
    <el-menu :default-active="defaultActive" :router="true">
      <el-menu-item
        v-for="route in routes"
        :key="route.name"
        :index="route.path"
      >
        <el-badge
          v-if="route.needBadge && hasNewRelease"
          is-dot
          class="sider-badge"
        >
          <i :class="route.icon"></i>
        </el-badge>
        <i v-else :class="route.icon"></i>
        <span>{{ route.name }}</span>
      </el-menu-item>
      <!-- <el-menu-item index="/">
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
      </el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
import showdown from 'showdown';
import routes from '../../router/routes';
import API from '../../utils/API';

const converter = new showdown.Converter();

export default {
  data() {
    return {
      routes,
      checkedReleasesIds: this.$store.getters.getCheckedReleasesIds,
      fetchedReleases: []
    };
  },

  methods: {
    initComponent() {
      this.checkedReleasesIds = this.$store.getters.getCheckedReleasesIds;
    },

    async fetchReleaseNotes() {
      this.loading = true;
      try {
        const resp = await API.getReleases();
        if (resp) {
          this.fetchedReleases = resp.data.map(release => {
            return {
              body: release.body,
              html: converter.makeHtml(release.body),
              created_at: release.created_at,
              published_at: release.published_at,
              id: release.id,
              name: release.name,
              tag_name: release.tag_name
            };
          });
          console.log('fetchedReleases :', this.fetchedReleases);

          chrome.storage.sync.set(
            {
              fetchedReleases: this.fetchedReleases
            },
            () => {}
          );
        } else {
          throw new Error('No resp');
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    }
  },

  computed: {
    defaultActive() {
      return this.$route.path;
    },

    hasNewRelease() {
      alert(`this.checkedReleasesIds.length ${this.checkedReleasesIds.length}`);
      return this.checkedReleasesIds.length < this.fetchedReleases.length;
    }
  },

  created() {
    this.fetchReleaseNotes();
    this.initComponent();
    this.$root.$on('watched', () => {
      this.initComponent();
    });
  },

  beforeDestroy() {
    this.$root.$off('watched');
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/global.scss';

#sider {
  position: fixed;
  width: $sider-width;
  height: $sider-height;
  background-color: white;

  /deep/ .sider-badge {
    display: inline;

    .el-badge__content {
      right: 15px;
      top: 5px;
    }
  }
}
</style>

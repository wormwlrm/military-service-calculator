<template>
  <div id="releases">
    <el-row>
      <el-timeline>
        <el-timeline-item
          v-for="release in releases"
          :key="release.id"
          :timestamp="$dayjs(release.created_at).format('YYYY-MM-DD')"
          placement="top"
        >
          <el-card :body-style="{ padding: '10px' }">
            <span slot="header">
              <el-button type="text" :href="release.html_url" target="_blank">
                {{ release.name }}
              </el-button>
            </span>
            <span v-html="release.html" class="release-html"></span>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-row>
  </div>
</template>

<script>
import mixin from '../../mixin/mixin';

export default {
  data() {
    return {
      releases: [],
      loading: false
    };
  },

  methods: {
    initComponent() {
      this.releases = this.$store.getters.getFetchedReleases;
      const payload = {
        checkedReleasesIds: this.releases.map(release => release.id)
      };
      if (this.releases.length) {
        this.save(payload, 'updated');
      }
    }
  },

  mixins: [mixin]
};
</script>

<style lang="scss" scoped>
#releases {
  min-height: 170px;

  .el-timeline {
    padding-left: 0;

    /deep/ .el-card__header {
      padding: 0 10px;
    }
  }

  .release-html {
    word-break: keep-all;

    /deep/ ul {
      padding-left: 20px;
    }
  }
}
</style>

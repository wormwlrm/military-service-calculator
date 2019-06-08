<template>
  <div id="option">
    <el-row>
      <el-form ref="form" label-width="80px" label-position="left" size="small">
        <el-form-item label="테마">
          <el-switch
            v-model="theme"
            active-color="#303133"
            inactive-color="#DCDFE6"
            active-text="어둡게"
            inactive-text="밝게"
            active-value="dark"
            inactive-value="white"
            @change="onThemeChanged"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="초기화">
          <el-button size="small" @click="reset">
            초기화
          </el-button>
        </el-form-item>
        <el-form-item label="Dev">
          <el-button size="small" @click="DevSet">
            Dev
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import mixin from '../../mixin/mixin';

export default {
  data() {
    return {
      username: '',
      startDate: '',
      endDate: '',
      serviceType: '',
      theme: ''
    };
  },

  methods: {
    onThemeChanged(value) {
      this.theme = value;
      this.saveData();
    },

    saveData() {
      const { theme, startDate, endDate } = this;
      const payload = {
        theme,
        startDate,
        endDate
      };
      this.save(payload);
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, 3000);
    },

    reset() {
      this.startDate = '';
      this.endDate = '';
      this.username = '';
      this.serviceType = '';
      this.saveData();
    },

    DevSet() {
      this.startDate = this.$dayjs().valueOf();
      this.endDate = this.$dayjs(this.startDate)
        .add(1, 'minute')
        .valueOf();
      this.saveData();
    }
  },

  mixins: [mixin]
};
</script>

<style lang="scss" scoped></style>

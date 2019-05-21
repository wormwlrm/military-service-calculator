<template>
  <div id="option">
    <el-row>
      <el-form ref="form" label-width="80px" label-position="left" size="small">
        <el-form-item label="Theme">
          <el-switch
            v-model="theme"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="White"
            inactive-text="Dark"
            active-value="white"
            inactive-value="dark"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="Reset">
          <el-button size="small" @click="reset">
            Reset
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
    saveData() {
      const { endDate, startDate, username, serviceType } = this;
      const payload = {
        startDate,
        endDate,
        username,
        serviceType
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
    }
  },

  mixins: [mixin]
};
</script>

<style lang="scss" scoped></style>

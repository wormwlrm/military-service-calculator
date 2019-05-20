<template>
  <div id="option">
    <el-row>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        label-position="left"
        size="small"
      >
        <el-form-item label="Name">
          <el-input v-model="form.username" size="small"></el-input>
        </el-form-item>
        <el-form-item label="Start Date">
          <el-date-picker
            v-model="form.startDate"
            type="date"
            size="small"
            placeholder="Pick a day"
            clearable
            @change="onStartDateChange"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            :picker-options="startDateOption"
          />
        </el-form-item>
        <el-form-item label="End Date">
          <el-date-picker
            v-model="form.endDate"
            type="date"
            size="small"
            placeholder="Pick a day"
            clearable
            @change="onEndDateChange"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            :picker-options="endDateOption"
          />
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" @click="saveEndDate">
        Save
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDateOption: null,
      endDateOption: null,
      form: {
        startDate: '',
        endDate: ''
      }
    };
  },

  async created() {
    try {
      chrome.storage.sync.get(null, result => {
        if (result) {
          this.init(result);
        }
      });
    } catch (e) {
      console.error(e);
    } finally {
      // this.loading = false;
    }
  },

  mounted() {},

  methods: {
    init(result) {
      this.form = {
        username: '',
        startDate: '',
        endDate: ''
      };
      this.form.username = result.username;
      this.form.startDate = result.startDate;
      this.form.endDate = result.endDate;

      this.startDateOption = {
        disabledDate: time => {
          if (this.form.endDate) {
            return time.getTime() >= this.$dayjs(this.form.endDate).valueOf();
          }
          return false;
        }
      };

      this.endDateOption = {
        disabledDate: time => {
          if (this.form.startDate) {
            return time.getTime() <= this.$dayjs(this.form.startDate).valueOf();
          }
          return false;
        }
      };
    },

    onStartDateChange(date) {
      console.log(`Value Changed to ${date}`);
    },

    onEndDateChange(date) {
      console.log(`Value Changed to ${date}`);
    },

    saveEndDate() {
      chrome.storage.sync.set(
        {
          startDate: this.form.startDate,
          endDate: this.form.endDate,
          username: this.form.username
        },
        () => {
          this.$message.success({
            message: 'Congrats, this is a success message.',
            type: 'success'
          });
          console.log(`Value is set to ${this.endDate}`);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#option {
  position: relative;
}
</style>

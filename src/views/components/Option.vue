<template>
  <div id="option">
    <el-row>
      <el-form
        ref="form"
        :model="form"
        label-width="120px"
        label-position="top"
      >
        <el-form-item label="Activity name">
          <el-col :span="11">
            <el-date-picker
              v-model="form.startDate"
              type="date"
              placeholder="Pick a day"
              clearable
              @change="onStartDateChange"
              format="yyyy/MM/dd"
              value-format="yyyy-MM-dd"
              :picker-options="startDateOption"
            />
          </el-col>
          <el-col :span="11" :offset="2">
            <el-date-picker
              v-model="form.endDate"
              type="date"
              placeholder="Pick a day"
              clearable
              @change="onEndDateChange"
              format="yyyy/MM/dd"
              value-format="yyyy-MM-dd"
              :picker-options="endDateOption"
            />
          </el-col>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="saveEndDate">
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
      endDateOption: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
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
        startDate: '',
        endDate: ''
      };
      this.form.startDate = result.startDate;
      this.form.endDate = result.endDate;

      this.startDateOption = {
        disabledDate: time => {
          if (this.form.endDate) {
            return time.getTime() >= new Date(this.form.endDate).getTime();
          }
          return false;
        }
      };

      this.endDateOption = {
        disabledDate: time => {
          if (this.form.startDate) {
            return time.getTime() <= new Date(this.form.startDate).getTime();
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
          endDate: this.form.endDate
        },
        () => {
          this.$notify({
            title: 'Success',
            message: 'This is a success message',
            type: 'success',
            duration: 1500
          });
          console.log(`Value is set to ${this.endDate}`);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>

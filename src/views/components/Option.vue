<template>
  <div id="option">
    <el-row>
      <el-form ref="form" label-width="80px" label-position="left" size="small">
        <el-form-item label="Name">
          <el-input v-model="username" size="small"></el-input>
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="serviceType" placeholder="Select">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Start Date">
          <el-date-picker
            v-model="startDate"
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
            v-model="endDate"
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
      <el-button size="small" @click="reset">
        Reset
      </el-button>
      <el-button
        :type="saved ? 'success' : 'primary'"
        size="small"
        @click="saveData"
      >
        <span v-if="saved">
          <i class="el-icon-check"></i>
          Saved
        </span>
        <span v-else>Save</span>
      </el-button>
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

      startDateOption: null,
      endDateOption: null,
      saved: false,
      cities: [
        {
          value: '육군',
          label: '육군'
        },
        {
          value: '해군',
          label: '해군'
        },
        {
          value: '공군',
          label: '공군'
        },
        {
          value: '해병',
          label: '해병'
        },
        {
          value: '의경',
          label: '의경'
        },
        {
          value: '헌병',
          label: '헌병'
        },
        {
          value: '사회복무요원',
          label: '사회복무요원'
        },
        {
          value: '의방',
          label: '의방'
        },
        {
          value: '산업기능요원(현역)',
          label: '산업기능요원(현역)'
        },
        {
          value: '산업기능요원(보충역)',
          label: '산업기능요원(보충역)'
        },
        {
          value: '특전병',
          label: '특전병'
        },
        {
          value: '카투사',
          label: '카투사'
        }
      ]
    };
  },

  mounted() {
    this.setDateOption();
  },

  methods: {
    setDateOption() {
      this.startDateOption = {
        disabledDate: time => {
          if (this.endDate) {
            return time.getTime() >= this.$dayjs(this.endDate).valueOf();
          }
          return false;
        }
      };

      this.endDateOption = {
        disabledDate: time => {
          if (this.startDate) {
            return time.getTime() <= this.$dayjs(this.startDate).valueOf();
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

<style lang="scss" scoped>
#option {
  position: relative;
}
</style>

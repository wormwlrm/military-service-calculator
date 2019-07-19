<template>
  <div id="option">
    <el-row>
      <el-form ref="form" label-width="80px" label-position="left" size="small">
        <el-form-item label="이름">
          <el-input
            v-model="username"
            size="small"
            placeholder="이름을 입력하세요"
          ></el-input>
        </el-form-item>
        <el-form-item label="복무">
          <el-select
            v-model="serviceType"
            placeholder="복무형태를 선택하세요"
            @change="resetServiceDate"
          >
            <el-option-group
              v-for="group in serviceTypes"
              :key="group.label"
              :label="group.label"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span
                  v-if="item.length"
                  style="float: right; color: #8492a6; font-size: 13px; margin-left: 10px;"
                  >{{ item.length }}개월</span
                >
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="입영일">
          <el-date-picker
            v-model="startDate"
            type="date"
            size="small"
            clearable
            placeholder="날짜를 선택하세요"
            @change="onStartDateChange"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            :picker-options="startDateOption"
            :disabled="!serviceType"
          />
        </el-form-item>
        <el-form-item label="전역일">
          <el-date-picker
            v-model="endDate"
            type="date"
            size="small"
            placeholder="날짜를 선택하세요"
            clearable
            @change="onEndDateChange"
            format="yyyy/MM/dd"
            value-format="yyyy-MM-dd"
            :picker-options="endDateOption"
            :disabled="!serviceType"
          />
        </el-form-item>
      </el-form>
      <el-button
        :type="saved ? 'success' : 'primary'"
        size="small"
        @click="updateData"
      >
        <span v-if="saved">
          <i class="el-icon-check"></i>
          저장됨
        </span>
        <span v-else>저장</span>
      </el-button>
    </el-row>
  </div>
</template>

<script>
import { SERVICE_TYPES, getEndDate } from '../../utils';
import mixin from '../../mixin/mixin';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      username: null,
      startDate: null,
      endDate: null,
      serviceType: null,

      startDateOption: null,
      endDateOption: null,
      saved: false,
      serviceTypes: SERVICE_TYPES
    };
  },

  computed: {},

  methods: {
    initComponent() {
      this.setDateOption();
      this.username = this.$store.getters.getUsername;
      this.startDate = this.$store.getters.getStartDate;
      this.endDate = this.$store.getters.getEndDate;
      this.serviceType = this.$store.getters.getServiceType;
    },

    setDateOption() {
      // this.startDateOption = {
      //   disabledDate: time => {
      //     if (this.endDate) {
      //       return time.getTime() >= this.$dayjs(this.endDate).valueOf();
      //     }
      //     return false;
      //   }
      // };

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

      if (date) {
        this.endDate = getEndDate(date, this.serviceType);
      } else {
        this.resetServiceDate();
      }
    },

    onEndDateChange(date) {
      console.log(`Value Changed to ${date}`);
    },

    resetServiceDate() {
      this.startDate = null;
      this.endDate = null;
    },

    updateData() {
      const payload = {
        startDate: this.startDate,
        endDate: this.endDate,
        username: this.username,
        serviceType: this.serviceType
      };
      this.save(payload, 'updated');

      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, 3000);
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

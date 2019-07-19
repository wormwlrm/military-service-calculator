<template>
  <div id="option">
    <el-row>
      <el-form ref="form" label-width="80px" label-position="left" size="small">
        <!-- <el-form-item label="테마">
          <el-switch
            v-model="themeType"
            active-color="#303133"
            inactive-color="#DCDFE6"
            active-text="어둡게"
            inactive-text="밝게"
            active-value="dark"
            inactive-value="white"
            @change="onThemeTypeChanged"
          >
          </el-switch>
        </el-form-item>-->

        <el-form-item label="뱃지">
          <span slot="label">
            뱃지
            <el-popover trigger="hover" placement="bottom">
              <span slot>우측 상단에 표기되는 데이터 타입을 설정합니다.</span>
              <i slot="reference" class="el-icon-question"></i>
            </el-popover>
          </span>
          <el-select v-model="badgeType" @change="onBadgeTypeChanged">
            <el-option
              v-for="item in BADGE_TYPE"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              >{{ item.label }}</el-option
            >
          </el-select>
        </el-form-item>

        <el-form-item label="초기화">
          <span slot="label">
            초기화
            <el-popover trigger="hover" placement="bottom">
              <span slot>현재 저장된 계정, 옵션 정보가 초기화됩니다.</span>
              <i slot="reference" class="el-icon-question"></i>
            </el-popover>
          </span>
          <el-button
            :type="reset ? 'success' : 'primary'"
            size="small"
            @click="resetData"
          >
            <span v-if="reset">
              <i class="el-icon-check"></i>
              저장됨
            </span>
            <span v-else>초기화</span>
          </el-button>
        </el-form-item>

        <!-- <el-form-item label="Dev">
          <el-button size="small" @click="DevSet">
            Dev
          </el-button>
          <el-button size="small" @click="DevSet2">
            Dev2
          </el-button>
        </el-form-item>-->
      </el-form>
    </el-row>
  </div>
</template>

<script>
import { BADGE_TYPE } from '../../utils';
import mixin from '../../mixin/mixin';

export default {
  data() {
    return {
      username: null,
      startDate: null,
      endDate: null,
      serviceType: null,
      themeType: null,
      badgeType: 'percent',

      BADGE_TYPE,
      reset: false
    };
  },

  methods: {
    initComponent() {
      this.username = this.$store.getters.getUsername;
      this.startDate = this.$store.getters.getStartDate;
      this.endDate = this.$store.getters.getEndTime;
      this.serviceType = this.$store.getters.getServiceType;
      this.themeType = this.$store.getters.getThemeType;
      this.badgeType = this.$store.getters.getBadgeType;
    },

    onThemeTypeChanged(value) {
      this.themeType = value;
      this.updateData();
    },

    onBadgeTypeChanged(value) {
      this.badgeType = value;
      this.updateData();
    },

    updateData() {
      const payload = {
        themeType: this.themeType,
        badgeType: this.badgeType,
        startDate: this.startDate,
        endDate: this.endDate,
        serviceType: this.serviceType,
        username: this.username,
        checkedReleasesIds: []
      };
      this.save(payload, 'updated');
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, 3000);
    },

    resetData() {
      this.username = null;
      this.startDate = null;
      this.endDate = null;
      this.serviceType = null;
      this.themeType = null;
      this.badgeType = 'percent';

      this.reset = true;
      setTimeout(() => {
        this.reset = false;
      }, 3000);

      this.updateData();
    },

    DevSet() {
      this.startDate = this.$dayjs().valueOf();
      this.endDate = this.$dayjs(this.startDate)
        .add(1, 'minute')
        .valueOf();
      this.updateData();
    },

    DevSet2() {
      this.startDate = this.$dayjs().valueOf();
      this.endDate = this.$dayjs(this.startDate)
        .add(5, 'minute')
        .valueOf();
      this.updateData();
    }
  },

  mixins: [mixin]
};
</script>

<style lang="scss" scoped></style>

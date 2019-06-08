<template>
  <div id="dashboard" shadow="never">
    <template v-if="startDate && endDate">
      <div class="duration">{{ startDate }} ~ {{ endDate }}</div>
      <div class="username">
        <span class="username-highlighter">{{ username || '굳건이' }}</span> 님
        <br />
        <span>{{ getServiceName }}</span>
      </div>
      <!-- {{ startDate }} & {{ endDate }}
      {{ doneTime }} / {{ allTime }} -->
      <div class="remain-percentage">
        <span class="remain-percentage-highlighter">
          {{ remainPercentage }}
        </span>
        <span class="remain-percentage-unit">%</span>
      </div>
      <div class="percentage-progress">
        <el-progress
          :percentage="remainPercentageNumber"
          status="success"
        ></el-progress>
      </div>
      <el-divider></el-divider>
      <div class="tab-info">
        <div class="tab-item">
          <p>전체 복무일</p>
          <span>{{ wholeServiceDay }}</span>
        </div>
        <div class="tab-item">
          <p>현재 복무일</p>
          <span>{{ currentServiceDay }}</span>
        </div>
        <div class="tab-item">
          <p>남은 복무일</p>
          <span>{{ remainServiceDay }}</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="no-info">
        <i class="el-icon-bell alert-icon"></i>
        <h2>전역일을 등록해주세요!</h2>
        <p>계정 메뉴에서 본인의 정보를 입력해주세요.</p>
        <router-link to="/account">
          <el-button>
            바로가기
          </el-button>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import { getServiceLabelByValue } from '../../utils';
import mixin from '../../mixin/mixin';

export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      username: '',
      serviceType: '',

      date: this.$dayjs(),
      timer: null,
      loading: false
    };
  },

  watch: {
    remainPercentageNumber() {
      if (
        typeof this.remainPercentageNumber === 'number' &&
        !isNaN(this.remainPercentageNumber)
      ) {
        chrome.browserAction.setBadgeText({
          text: `${this.remainPercentageNumber}%`
        });
      }
    },

    ready() {
      this.timer = setInterval(this.runTimer, 50);
    }
  },

  computed: {
    remainPercentageNumber() {
      return Math.floor(Number(this.remainPercentage));
    },

    remainPercentage() {
      const percentage = ((this.doneTime / this.allTime) * 100).toFixed(7);
      if (percentage > 100) return 100;
      else if (percentage <= 0) return 0;
      else return percentage;
    },

    doneTime() {
      return this.date.valueOf() - this.$dayjs(this.startDate).valueOf();
    },

    allTime() {
      return (
        this.$dayjs(this.endDate).valueOf() -
        this.$dayjs(this.startDate).valueOf()
      );
    },

    ready() {
      return !!(this.startDate && this.endDate);
    },

    wholeServiceDay() {
      return this.$dayjs(this.endDate).diff(this.$dayjs(this.startDate), 'day');
    },

    currentServiceDay() {
      return this.$dayjs().diff(this.$dayjs(this.startDate), 'day');
    },

    remainServiceDay() {
      return this.wholeServiceDay - this.currentServiceDay;
      // return this.$dayjs(this.endDate).diff(this.$dayjs(), 'day');
    },

    getServiceName() {
      return getServiceLabelByValue(this.serviceType);
    }
  },

  mounted() {},

  methods: {
    runTimer() {
      this.date = this.$dayjs();
    }
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  mixins: [mixin]
};
</script>

<style lang="scss" scoped>
@import '../../style/global.scss';

#dashboard {
  position: relative;

  .username {
    font-size: 10px;

    .username-highlighter {
      font-size: 14px;
    }
  }

  .duration {
    position: absolute;
    right: 0;
    color: #909399;
  }

  .remain-percentage {
    margin: 10px 0;
    font-size: 15px;

    .remain-percentage-highlighter {
      font-size: 42px;
      font-weight: 900;
    }

    .remain-percentage-unit {
      font-weight: 600;
    }
  }

  .percentage-progress {
    margin: 10px 0;
  }

  .tab-info {
    position: relative;
    display: flex;
    left: -20px;
    width: calc(100% + 40px);

    .tab-item {
      flex: 1;
      text-align: center;
      height: 60px;
      margin-left: 5px;
      transition: 0.5s ease;

      &:last-child {
        margin-right: 5px;
      }
    }
  }

  .no-info {
    display: flex;
    justify-content: center;
    vertical-align: middle;
    flex-direction: column;
    text-align: center;
    height: 230px;

    .alert-icon {
      font-size: 30px;
    }
  }
}
</style>

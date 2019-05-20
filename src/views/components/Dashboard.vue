<template>
  <div id="dashboard" shadow="never">
    <template v-if="startDate && endDate">
      <div class="duration">{{ startDate }} - {{ endDate }}</div>
      <div class="username">
        <span class="username-highlighter">{{ username }}</span> 님
      </div>
      <!-- {{ startDate }} & {{ endDate }}
      {{ doneTime }} / {{ allTime }} -->
      <div class="remain-percentage">
        <span class="remain-percentage-highlighter">{{
          remainPercentage
        }}</span>
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
      There is no end Date!
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      username: '',
      date: this.$dayjs(),
      timer: null
    };
  },

  computed: {
    remainPercentageNumber() {
      return Math.floor(Number(this.remainPercentage));
    },

    remainPercentage() {
      return ((this.doneTime / this.allTime) * 100).toFixed(5);
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

    wholeServiceDay() {
      return this.$dayjs(this.endDate).diff(this.$dayjs(this.startDate), 'day');
    },

    currentServiceDay() {
      return this.$dayjs().diff(this.$dayjs(this.startDate), 'day');
    },

    remainServiceDay() {
      return this.wholeServiceDay - this.currentServiceDay;
      // return this.$dayjs(this.endDate).diff(this.$dayjs(), 'day');
    }
  },

  created() {
    chrome.storage.sync.get(null, result => {
      if (result) {
        console.log(result);
        this.startDate = result.startDate;
        this.endDate = result.endDate;
        this.username = result.username;

        this.timer = setInterval(this.runTimer, 50);
      }
    });
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    runTimer() {
      this.date = this.$dayjs();
    }
  }
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
      font-size: 50px;
      font-weight: 900;
    }

    .remain-percentage-unit {
      font-weight: 600px;
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
}
</style>

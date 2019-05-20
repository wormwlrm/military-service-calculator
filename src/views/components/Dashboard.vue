<template>
  <div id="dashboard">
    <template v-if="startDate && endDate">
      {{ startDate }} & {{ endDate }}

      {{ remainPercentage }} %
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
      date: new Date(),
      timer: null
    };
  },

  computed: {
    remainPercentage() {
      // return 5;
      return ((this.doneTime / this.allTime) * 100).toFixed(10);
    },

    doneTime() {
      return this.date.getTime() - new Date(this.startDate).getTime();
    },

    allTime() {
      return (
        new Date(this.endDate).getTime() - new Date(this.startDate).getTime()
      );
    }
  },

  created() {
    chrome.storage.sync.get(null, result => {
      if (result) {
        console.log(result);
        this.startDate = result.startDate;
        this.endDate = result.endDate;

        this.timer = setInterval(this.runTimer, 10);
      }
    });
  },

  methods: {
    runTimer() {
      this.date = new Date();
    }
  }
};
</script>

<style lang="scss" scoped></style>

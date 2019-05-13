<template>
  <div id="dashboard">
    <input v-model="data" type="text" />
    <button @click="saveEndDate">Save</button>
    <br />
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    };
  },

  created() {
    chrome.storage.sync.get(['key'], result => {
      console.log('Value currently is ' + result.key);
      this.data = result.key + '/';
    });
  },

  mounted() {},

  methods: {
    saveEndDate() {
      chrome.storage.sync.set({ key: this.data }, () => {
        console.log('Value is set to ' + this.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

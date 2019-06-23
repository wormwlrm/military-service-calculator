const mixin = {
  created() {
    this.initComponent();
    this.$root.$on('loaded', () => {
      this.initComponent();
    });
  },

  beforeDestroy() {
    this.$root.$off('loaded');
  },

  methods: {
    save(payload = {}) {
      try {
        chrome.storage.sync.set(payload, () => {
          this.$root.$emit('updated');
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
};

export default mixin;

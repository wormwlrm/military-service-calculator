const mixin = {
  created() {
    this.initComponent();
    this.$root.$on('loaded:component', () => {
      this.initComponent();
    });
  },

  beforeDestroy() {
    this.$root.$off('loaded:component');
  },

  methods: {
    save(payload = {}, eventName = 'updated') {
      try {
        chrome.storage.sync.set(payload, result => {
          console.log('result :', result);
          this.$root.$emit(eventName);
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
};

export default mixin;

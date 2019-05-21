const mixin = {
  created() {
    console.log('mixin init start');
    chrome.storage.sync.get(null, result => this.init(result));
  },

  methods: {
    init(result) {
      try {
        if (result) {
          Object.keys(result).forEach(key => {
            if (typeof this[key] !== 'undefined') {
              console.log(key, result[key]);
              this[key] = result[key];
            }
          });
          // this.loading = false;
        } else {
          throw new Error('Fail to load data');
        }
      } catch (e) {
        console.error(e);
      } finally {
        console.log('init finished');
      }
    },

    save(payload = {}) {
      try {
        chrome.storage.sync.set(payload, () => {
          console.log('save success', payload);
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
};

export default mixin;

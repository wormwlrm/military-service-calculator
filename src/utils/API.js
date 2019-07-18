import axios from 'axios';

class API {
  // API 핸들러
  async execute(method = 'get', url) {
    console.log(this);
    try {
      const data = await axios({
        url,
        datatype: 'json',
        method
      });
      return data;
    } catch (e) {
      return e;
    }
  }

  getReleases() {
    return this.execute(
      'get',
      'https://api.github.com/repos/wormwlrm/military-service-calculator/releases'
    );
  }
}

export default new API();

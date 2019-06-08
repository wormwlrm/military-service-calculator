import dayjs from 'dayjs';

global.browser = require('webextension-polyfill');

console.log(global.browser);

// 백그라운드에서 퍼센트 계산
const timer = setInterval(
  () =>
    chrome.storage.sync.get(null, result => {
      console.log(result);
      if (result.startDate && result.endDate) {
        const allTime =
          dayjs(result.endDate).valueOf() - dayjs(result.startDate).valueOf();
        const doneTime = dayjs().valueOf() - dayjs(result.startDate).valueOf();
        let remainPercentage = ((doneTime / allTime) * 100).toFixed(7);
        if (remainPercentage > 100) remainPercentage = 100;
        if (remainPercentage <= 0) remainPercentage = 0;
        // alert(result.endDate);
        const remainPercentageNumber = Math.floor(Number(remainPercentage));

        chrome.browserAction.setBadgeText({
          text: `${remainPercentageNumber}%`
        });
      } else {
        chrome.browserAction.setBadgeText({
          text: ''
        });
      }
    }),
  5000
);

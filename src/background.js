import dayjs from 'dayjs';

global.browser = require('webextension-polyfill');

function refreshBadgeText() {
  chrome.storage.sync.get(null, result => {
    console.log(result);
    if (result.startDate && result.endDate) {
      switch (result.badgeType) {
        case 'date': {
          const wholeServiceDay = dayjs(result.endDate).diff(
            dayjs(result.startDate),
            'day'
          );
          const currentServiceDay = dayjs().diff(
            dayjs(result.startDate),
            'day'
          );
          let remainDate = wholeServiceDay - currentServiceDay;
          if (remainDate < 0) remainDate = 0;
          chrome.browserAction.setBadgeText({
            text: `${remainDate}`
          });
          break;
        }

        default: {
          const allTime =
            dayjs(result.endDate).valueOf() - dayjs(result.startDate).valueOf();
          const doneTime =
            dayjs().valueOf() - dayjs(result.startDate).valueOf();
          let remainPercentage = ((doneTime / allTime) * 100).toFixed(7);
          if (remainPercentage > 100) remainPercentage = 100;
          if (remainPercentage <= 0) remainPercentage = 0;
          // alert(result.endDate);
          const remainPercentageNumber = Math.floor(Number(remainPercentage));

          chrome.browserAction.setBadgeText({
            text: `${remainPercentageNumber}%`
          });
          break;
        }
      }
    } else {
      chrome.browserAction.setBadgeText({
        text: ''
      });
    }
  });
}

// storage 변경 시 데이터 갱신
chrome.storage.onChanged.addListener(() => {
  refreshBadgeText();
});

console.log(process.env.NODE_ENV);
// 백그라운드에서 갱신 주기
let timer = null;
if (process.env.NODE_ENV === 'production') {
  timer = setInterval(refreshBadgeText, 60 * 60 * 1000);
} else {
  timer = setInterval(refreshBadgeText, 5 * 1000);
}

// 앱 로드 이후 최초 1회 시행
refreshBadgeText();

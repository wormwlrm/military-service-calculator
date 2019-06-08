// import dayjs from 'dayjs';

global.browser = require('webextension-polyfill');

console.log(global.browser);

// function updatePercentage() {
//   chrome.storage.sync.get(['startDate, endDate'], result => {
//     // alert(result.startDate);
//     // const allTime =
//     //   dayjs(result.endDate).valueOf() - dayjs(result.startDate).valueOf();
//     // const doneTime = dayjs().valueOf() - dayjs(result.startDate).valueOf();
//     // let remainPercentage = ((doneTime / allTime) * 100).toFixed(7);
//     // if (remainPercentage > 100) remainPercentage = 100;
//     // if (remainPercentage <= 0) remainPercentage = 0;
//     // // alert(result.endDate);
//     // const remainPercentageNumber = Math.floor(Number(remainPercentage));
//     // // chrome.browserAction.setBadgeText({
//     // //   text: `${remainPercentageNumber}%`
//     // // });
//   });
// }

// const timer = setInterval(updatePercentage, 2000);

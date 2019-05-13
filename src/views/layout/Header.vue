<template>
  <div id="header">
    전역일 계산기
    <button @click="noti">Noti</button>
  </div>
</template>

<script>
import image from '../../icons/icon_48.png';

export default {
  methods: {
    noti() {
      chrome.notifications.create({
        type: 'basic',
        title: 'D-100일',
        message: '소집해제까지 D-100 남았습니다!',
        iconUrl: '/icon_48.png'
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

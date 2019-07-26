# 📅 Military Service Calculator

![screenshot](/assets/5.png)

전역일 계산기 확장 프로그램

- [크롬](https://chrome.google.com/webstore/detail/%EC%A0%84%EC%97%AD%EC%9D%BC-%EA%B3%84%EC%82%B0%EA%B8%B0/obbajbadjgfkacnncdiigaffeajfejih)
- [파이어폭스](https://addons.mozilla.org/ko/firefox/addon/%EC%A0%84%EC%97%AD%EC%9D%BC-%EA%B3%84%EC%82%B0%EA%B8%B0/)

## ⚒ 설치

### 크롬

1. 이 저장소를 `clone`하여 Dev 서버를 실행시킵니다.

   ```bash
   git clone https://github.com/wormwlrm/military-service-calculator.git
   cd military-service-calculator
   npm install
   npm run dev
   ```

2. 크롬 브라우저를 열고 `chrome://extensions`로 이동합니다.

3. 우측 상단의 개발자 모드를 켭니다.

4. `압축 해제된 확장 프로그램 로드` 버튼으로 `/dist` 디렉토리를 로드합니다.

### 파이어폭스

1. 이 저장소를 `clone`하여 Dev 서버를 실행시킵니다.

   ```bash
   git clone https://github.com/wormwlrm/military-service-calculator.git
   cd military-service-calculator
   npm install
   npm run dev
   ```

1. 파이어폭스에서 `about:debugging#addons`으로 이동합니다.

1. `부가기능 디버깅 활성화`를 체크합니다.

1. 우측 상단의 `임시 부가기능 로드...` 버튼으로 `/dist` 디렉토리의 `manifest.json` 파일을 로드합니다.

## 🖨 배포

```bash
npm run build
```

## 🛠 의존성

- [Vue.js](https://github.com/vuejs/vue)
- [vue-web-extension](https://github.com/Kocal/vue-web-extension)
- [day.js](https://github.com/iamkun/dayjs)
- [axios](https://github.com/axios/axios)
- [showdown](https://github.com/showdownjs/showdown)

## 🎰 버전

버전에 대한 정보는 [릴리즈 노트](https://github.com/wormwlrm/military-service-calculator/releases)에서 확인할 수 있습니다.

## 👨‍ 관리자

- [wormwlrm](https://github.com/wormwlrm)

## 👩‍ 기여자

어떤 양식의 풀 리퀘스트도 환영합니다.

- [bunseokbot](https://github.com/bunseokbot)
- [firefanda](https://github.com/firefanda)

## 라이센스

MIT License

<template>
  <div id="about">
    <div class="info">
      <img class="logo" src="/icons/icon128.png" />
      <h2 class="logo-title">전역일 계산기 v{{ manifest.version }}</h2>
      <p class="logo-description">* 본 정보는 행정효력이 없습니다.</p>
    </div>
    <div class="developer">
      <h3 class="developer-title">지원 및 개발자 정보</h3>
      <div class="tab-info">
        <div class="tab-item">
          <a
            href="https://wormwlrm.github.io/2019/06/15/Military-Service-Calculator-release-note.html"
            target="_blank"
          >
            <el-button icon="el-icon-document-checked" circle></el-button>
          </a>
          <br />
          <span class="item-title">공지사항</span>
        </div>
        <div class="tab-item">
          <a href="https://wormwlrm.github.io" target="_blank">
            <el-button icon="el-icon-s-flag" circle></el-button>
          </a>
          <br />
          <span class="item-title">웹사이트</span>
        </div>
        <div class="tab-item">
          <a href="mailto:wormwlrm@naver.com" target="_blank">
            <el-button icon="el-icon-message" circle></el-button>
          </a>
          <br />
          <span class="item-title">이메일</span>
        </div>
        <div class="tab-item">
          <a
            href="https://github.com/wormwlrm/military-service-calculator"
            target="_blank"
          >
            <el-button circle>
              <img class="github-logo" src="/icons/github.png" />
            </el-button>
          </a>
          <br />
          <span class="item-title">Github</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import manifest from '../../manifest.json';

export default {
  data() {
    return {
      manifest
    };
  }
};
</script>

<style lang="scss" scoped>
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  text-align: center;

  .info {
    .logo {
      width: 96px;
      height: 96px;
    }

    .logo-title {
      margin: 0;
    }

    .logo-description {
      margin: 0;
    }
  }

  .developer {
    .developer-title {
      margin-bottom: 5px;
    }

    .tab-info {
      display: flex;

      .tab-item {
        flex: 1;

        .github-logo {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}
</style>

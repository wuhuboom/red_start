<template>
  <div class="page-load center-center max-width750">
    <div class="logo-cont center-center">
      <div class="center-center flex-column">
        <ul class="center-center text">
          <li v-for="(item, idx) in text" :key="idx">{{ item }}</li>
        </ul>
        <div class="loader">
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const config = {
  // eslint-disable-next-line no-undef
  LinePATHArr: typeof LinePATHArr === "undefined" ? [] : LinePATHArr,
  // eslint-disable-next-line no-undef
  cacheName: typeof saveNameStr === "undefined" ? "" : saveNameStr,
  // eslint-disable-next-line no-undef
  timeoutStr: typeof timeoutStr === "undefined" ? 3000 : timeoutStr,
};
export default {
  name: "HelloWorld",
  methods: {
    getLinePath() {
      const cachedLinePath = localStorage.getItem(config.cacheName);

      if (cachedLinePath) {
        return JSON.parse(cachedLinePath);
      }

      // No cache found, select a line randomly or based on some logic
      const selectedLine =
        config.LinePATHArr[
          Math.floor(Math.random() * config.LinePATHArr.length)
        ];
      if (selectedLine) {
        localStorage.setItem(config.cacheName, JSON.stringify(selectedLine));
      }
      // Save selected line to cache

      return selectedLine;
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  computed: {
    text() {
      return "ACFN".split("");
    },
  },
  async created() {
    if (!config.LinePATHArr.length || !config.cacheName) return;
    const linePath = this.getLinePath();
    await this.sleep(config.timeoutStr);
    if (!linePath) return;
    location.href = `${linePath.prefix}${linePath.domain}`;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page-load {
  height: 100vh;
  color: #fff;
  .logo-cont {
    background: url("@/assets/img/Intersection1@2x.png") no-repeat center center;
    background-size: 100% 100%;
    width: 375px;
    height: 603px;
  }
  .text {
    font-size: 26px;
    color: #f11714;
    margin-bottom: 16px;
    margin-top: 80px;
    & > li {
      margin: 0 6px;
    }
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ball {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #f11714;
    margin: 0 5px;
    animation: scaleAndColorChange 1s infinite alternate;
  }

  .ball:nth-child(2) {
    animation-delay: 0.2s;
  }

  .ball:nth-child(3) {
    animation-delay: 0.4s;
  }

  .ball:nth-child(4) {
    animation-delay: 0.6s;
  }

  .ball:nth-child(5) {
    animation-delay: 0.8s;
  }

  @keyframes scaleAndColorChange {
    0% {
      transform: scale(1);
      background-color: #f11714;
    }
    100% {
      transform: scale(0.55);
      background-color: #ef7367;
    }
  }
}
</style>

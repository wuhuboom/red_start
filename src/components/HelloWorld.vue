<template>
  <div class="page-load center-center max-width750">
    <div class="logo-cont center-center">
      <div class="center-center flex-column">
        <ul class="center-center text">
          <li><img class="logo" src="@/assets/img/reglog.webp" alt="" /></li>
        </ul>
        <div class="loader loader5"></div>
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
//Loading 样式
import "vant/lib/loading/style";
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
    //location.href = `${linePath.prefix}${linePath.domain}`;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page-load {
  height: 100vh;
  color: #fff;
  background: url("@/assets/img/bg.webp") no-repeat center center;
  background-size: cover;
  .logo {
    display: block;
    width: 180px;
    height: 180px;
  }
  .text {
    margin-bottom: 24px;
  }
  .loader {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
  }
  .loader5::before {
    content: "";
    color: white;
    height: 50px;
    width: 50px;
    background: transparent;
    border-radius: 50%;
    border: 10px dotted lime;
    border-left-color: transparent;
    animation: load5 1s infinite ease-in-out;
  }
  @keyframes load5 {
    40% {
      transform: rotatez(-180deg);
      border-width: 16px;
    }
    80% {
      transform: rotatez(-360deg);
    }
    100% {
      transform: rotatez(-360deg);
    }
  }
}
</style>

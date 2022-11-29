<script setup>
import { onMounted, ref } from "vue";

const transform = ref(false);

onMounted(() => {
  transform.value = true;
});
</script>

<template>
  <div :class="transform ? 'logo-screen transform' : 'logo-screen'">
    <div>
      <img id="arrow-left" src="./images/arrowLeft.png" />
      <img id="line-bottom" src="./images/lineBottom.png" />
      <img id="line-top" src="./images/lineTop.png" />
      <img id="arrow-right" src="./images/arrowRight.png" />
    </div>
  </div>
</template>

<style scoped>
.logo-screen {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(43, 41, 57, 0.9);
  backdrop-filter: blur(5px);
  z-index: 10000;
  transition: opacity 0.5s 4s, z-index 0s 4.5s;
}

.transform.logo-screen {
  opacity: 0;
  z-index: -1;
}

img {
  position: absolute;
  transition: all 1.5s 1.5s;
}

#arrow-left {
  width: 50px;
  left: -75px;
}

#arrow-right {
  width: 50px;
  right: -75px;
}

.transform #arrow-left {
  rotate: 90deg;
  left: -60px;
}

.transform #arrow-right {
  rotate: 90deg;
  right: -60px;
}

#line-bottom {
  width: 50px;
  left: -26px;
  top: 30px;
}

#line-top {
  width: 50px;
  left: -24.75px;
  top: -16px;
}

.transform #line-bottom {
  rotate: 65deg;
  top: 16px;
  left: -58px;
}

.transform #line-top {
  top: 4px;
  left: -28px;
}
</style>

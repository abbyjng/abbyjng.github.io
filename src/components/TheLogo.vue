<script setup>
import { onMounted, ref } from "vue";
import splash from "./json/splash.json";

const transform = ref(false);

onMounted(() => {
  transform.value = true;
});
</script>

<template>
  <div :class="transform ? 'transform logo-screen' : 'logo-screen'">
    <LottieAnimation
      :animationData="splash"
      background="transparent"
      :speed="1"
      width="auto"
      height="auto"
      :loop="false"
      class="animation"
    ></LottieAnimation>
  </div>
</template>

<style scoped>
.logo-screen {
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  overflow: hidden;
  background-color: #2b2a34;
}

.animation {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
}

.transform.logo-screen {
  opacity: 0;
  z-index: -1;
  background-color: transparent;
  transition-delay: 3s, 3s, 0.5s;
  transition-property: opacity, z-index, background-color;
}
</style>

<script setup>
import { onMounted, ref } from "vue";
import splash from "./json/splash.json";

const transform = ref(false);

onMounted(() => {
  transform.value = true;
});
</script>

<template>
  <div
    :class="[
      transform ? 'transform opacity-0 z-[-1] bg-transparent' : 'z-[10000]',
      'fixed justify-center items-center top-0 left-0 right-0 bottom-0 flex overflow-hidden bg-[#2b2a34]',
    ]"
  >
    <LottieAnimation
      :animationData="splash"
      background="transparent"
      :speed="1"
      width="auto"
      height="auto"
      :loop="false"
      class="shrink-0 min-w-[100%] min-h-[100%]"
    ></LottieAnimation>
  </div>
</template>

<style scoped>
.transform {
  transition-delay: 3s, 3s, 0.5s;
  transition-property: opacity, z-index, background-color;
}
</style>

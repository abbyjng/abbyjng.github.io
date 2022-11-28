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
      <img id="arrow" src="./images/arrow.png" />
      <img id="line" src="./images/line.png" />
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
  transition: all 0.5s 4s;
}

.transform.logo-screen {
  opacity: 0;
}

#arrow {
  position: absolute;
  width: 50px;
  left: -50px;
  transition: all 1s 1.5s;
}

.transform #arrow {
  top: -30px;
  left: -25px;
  rotate: -90deg;
}

#line {
  position: absolute;
  width: 65px;
  left: 0px;
  top: 30px;
  transition: all 1s 1.5s;
}

.transform #line {
  left: -32px;
  top: 0;
}
</style>

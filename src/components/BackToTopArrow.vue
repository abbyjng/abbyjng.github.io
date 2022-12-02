<script setup>
import UpArrowIcon from "./icons/UpArrowIcon.vue";
</script>

<template>
  <div id="top-arrow">
    <UpArrowIcon />
    <p>Back to top</p>
  </div>
</template>

<style scoped>
#top-arrow {
  position: fixed;
  bottom: 10%;
  right: 10%;
  fill: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

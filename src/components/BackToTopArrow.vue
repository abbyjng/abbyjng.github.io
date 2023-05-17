<script setup>
import { ref } from "vue";
import ArrowIcon from "./svgs/ArrowIcon.vue";

const hovered = ref(false);
</script>

<template>
  <a
    id="top-arrow"
    href="#intro"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <ArrowIcon />
    <p :class="hovered ? 'hovered' : ''">Back to top</p>
  </a>
</template>

<style scoped>
#top-arrow {
  position: fixed;
  bottom: 10px;
  right: 20px;
  fill: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

p {
  opacity: 0;
  transition: all 0.3s;
}

p.hovered {
  opacity: 1;
}

a {
  color: white;
}

a:hover {
  color: white;
}

a::before {
  background-color: transparent;
}

a:hover::before {
  background-color: transparent;
}
</style>

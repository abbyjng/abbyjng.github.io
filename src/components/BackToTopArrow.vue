<script setup>
import ArrowIcon from "./svgs/ArrowIcon.vue";
</script>

<template>
  <a
    class="fixed bottom-2.5 right-5 fill-blueWhite flex flex-col items-center z-[1000] group no-underline"
    href="#intro"
  >
    <ArrowIcon />
    <p
      class="opacity-0 group-hover:opacity-100 text-blueWhite hover:text-blueWhite transition duration-300"
    >
      Back to top
    </p>
  </a>
</template>

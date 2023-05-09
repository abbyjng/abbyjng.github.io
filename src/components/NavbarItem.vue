<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  isCurrent: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <a
    :href="'#' + (name === 'home' ? '' : name)"
    :class="[isCurrent ? 'text-brightPurple' : 'text-blueWhite', 'uppercase']"
    >{{ name }}</a
  >
</template>

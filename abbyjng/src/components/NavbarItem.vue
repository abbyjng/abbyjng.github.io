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
  <a :href="'#' + name" :class="isCurrent ? 'current' : ''">{{ name }}</a>
</template>

<style scoped>
a {
  color: #f5f1ff;
}
a .current {
  color: #927aff;
}
</style>

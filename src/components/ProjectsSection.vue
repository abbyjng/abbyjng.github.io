<script setup>
defineProps({
  isInView: Boolean,
});
</script>

<template>
  <div>
    <p class="section-header">myWork();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <h1>What I've made</h1>
      <h2>project here</h2>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 480px) {
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}
</style>

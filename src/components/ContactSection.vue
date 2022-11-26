<script setup>
defineProps({
  isInView: Boolean,
});
</script>

<template>
  <div>
    <p class="section-header">connect();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <h1>Get in touch</h1>
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

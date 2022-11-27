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
      <h2>
        I'm not currently open for work, but I'd love to connect with you! Shoot
        me an email at <a href="mailto:ajng@umich.edu">ajng@umich.edu</a> or
        connect with me on
        <a href="https://www.linkedin.com/in/abigail-j-ng/">LinkedIn</a>.
      </h2>
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

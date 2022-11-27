<script setup>
defineProps({
  isInView: Boolean,
});
</script>

<template>
  <div>
    <p class="section-header">whoAmI();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <h1>About Me</h1>
      <h2>
        Hey there! My name is Abigail, and my passion lies in the intersection
        between solving puzzles and creating things. I've always found joy in
        coming up with my own solutions which don't compromise my designs when
        crocheting plushies, building mechanical keyboards, and writing my own
        Discord bots.
      </h2>
      <h2>
        Now, I use my creative problem solving to guide my designs in full stack
        development and push my learning as I become familiar with new
        frameworks. Check out some of my <a href="#projects">projects</a> to get
        a taste of what I love to do!
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

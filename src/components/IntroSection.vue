<script setup>
defineProps({
  isInView: Boolean,
});
</script>

<template>
  <div>
    <p class="section-header">helloWorld();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <h1 id="name">I'm Abigail Ng,</h1>
      <h1>web developer.</h1>
      <h2>
        I'm a software engineer who specializes in full stack development. I
        find joy in frontend design and discovering solutions to puzzling
        problems through creative means.
      </h2>
      <h2>
        I'm currently a computer science student at the
        <a href="https://umich.edu/" target="_blank">University of Michigan</a>
        and an incoming software engineer at
        <a href="https://stripe.com/" target="_blank">Stripe</a>.
      </h2>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #b0adb6;
  font-size: 2.3rem;
  font-weight: 500;
  line-height: 2.6rem;
}

#name {
  color: #f5f1ff;
}

@media (min-width: 480px) {
  h1 {
    font-size: 3.5rem;
    line-height: 3.8rem;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 4.8rem;
    line-height: 5.1rem;
  }
}

@media (min-width: 1024px) {
}
</style>

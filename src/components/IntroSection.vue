<script setup>
defineProps({
  isInView: Boolean,
});
</script>

<template>
  <div class="md:mt-[10vh]">
    <p class="section-header">helloWorld();</p>
    <div
      :class="[
        isInView ? 'in-view section-body' : 'section-body',
        'flex flex-col md:flex-row justify-between items-start gap-6',
      ]"
    >
      <div>
        <div
          class="text-blueWhite text-[2.3rem] sm:text-[3.5rem] lg:text-[4.8rem] font-medium leading-[2.6rem] sm:leading-[3.8rem] lg:leading-[5.1rem] transform-normal-case"
        >
          I'm Abigail Ng,
        </div>
        <div
          class="text-grey text-[2.3rem] sm:text-[3.5rem] lg:text-[4.8rem] font-medium leading-[2.6rem] sm:leading-[3.8rem] lg:leading-[5.1rem] transform-normal-case"
        >
          web developer.
        </div>
        <div class="text-blueWhite text-lg leading-6 mt-2">
          I'm a software engineer who specializes in full stack development. I
          find joy in frontend design and discovering solutions to puzzling
          problems through creative means.
        </div>
      </div>
      <img
        class="shrink-0 max-w-[80%] md:max-w-[35%] lg:max-w-[30%] md:self-center"
        src="./images/portrait.png"
      />
    </div>
  </div>
</template>

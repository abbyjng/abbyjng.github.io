<script setup>
defineProps({
  isInView: Boolean,
});
</script>

<template>
  <div>
    <div
      class="absolute bg-blueWhite w-screen h-[calc(100%+10vh)] -left-[10vw] -top-[3vh]"
    >
      <!-- top white triangle -->
      <div
        class="absolute w-full border-b-[min(15vh,100px)] border-r-[100vw] border-r-blueWhite/0 border-b-blueWhite bottom-[100%] z-10"
      />
      <!-- bottom white triangle -->
      <div
        class="absolute w-full border-t-[min(15vh,100px)] border-l-[100vw] border-l-blueWhite/0 border-t-blueWhite top-[100%] z-10"
      />
      <!-- top purple triangle -->
      <div
        class="absolute w-full border-b-[min(15vh,100px)] border-l-[100vw] border-l-brightPurple/0 border-b-brightPurple bottom-[100%] z-0"
      />
      <!-- bottom purple triangle -->
      <div
        class="absolute w-full border-t-[min(15vh,100px)] border-r-[100vw] border-r-brightPurple/0 border-t-brightPurple top-[100%] z-0"
      />
    </div>
    <p class="section-header">whoAmI();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <div
        class="font-semibold uppercase text-lg md:text-2xl text-darkPurple tracking-[1px]"
      >
        About Me
      </div>
      <!-- <div class="flex justify-between items-center gap-5"> -->
      <div class="text-darkPurple text-base leading-5">
        <div class="mt-2">
          Hey there! My name is Abigail, and my passion lies in the intersection
          between solving puzzles and creating things. I've always found joy in
          coming up with my own solutions which don't compromise my designs when
          crocheting plushies, building mechanical keyboards, and writing my own
          Discord bots.
        </div>
        <div class="mt-2">
          Now, I use my creative problem solving to guide my designs in full
          stack development and push my learning as I become familiar with new
          frameworks. Check out some of my <a href="#projects">projects</a> to
          get a taste of what I love to do!
        </div>
      </div>
      <!-- <img
          class="w-[80vw] rounded-full max-w-[200px] my-0 mx-auto shadow-pixelPortrait"
          src="./images/pixelPortrait.png"
        /> -->
      <!-- </div> -->
    </div>
  </div>
</template>

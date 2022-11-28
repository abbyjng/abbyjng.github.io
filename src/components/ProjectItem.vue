<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  details: JSON,
  index: Number,
});

const computedPadding = ref({});

function computePadding() {
  const backWindow =
    document.getElementsByClassName("project-back")[props.index];
  const frontWindow =
    document.getElementsByClassName("project-front")[props.index];

  backWindow.style.position = "relative";

  const backWindowHeightStr = window.getComputedStyle(backWindow, null).height;
  const frontWindowHeightStr = window.getComputedStyle(
    frontWindow,
    null
  ).height;

  const backWindowHeight = backWindowHeightStr.substring(
    0,
    backWindowHeightStr.length - 2
  );
  const frontWindowHeight = frontWindowHeightStr.substring(
    0,
    frontWindowHeightStr.length - 2
  );

  computedPadding.value = {
    "--padding": backWindowHeight - frontWindowHeight + 10 + "px",
  };
  backWindow.style.position = "absolute";
}

const opened = ref(false);

function toggleClick() {
  if (opened.value) {
    opened.value = false;
    console.log("toggled off");
  } else {
    opened.value = true;
    console.log("toggled on");
  }
}

function close() {
  if (opened.value) {
    opened.value = false;
    console.log("toggled off");
  }
}

onMounted(() => {
  window.addEventListener("resize", computePadding);
  computePadding();
});

onUnmounted(() => {
  window.removeEventListener("resize", computePadding);
});
</script>

<template>
  <div
    v-click-away="close"
    @click="toggleClick"
    :class="opened ? 'project-item open' : 'project-item closed'"
  >
    <div class="project-back">
      <p class="project-description">
        {{ details.description }}
      </p>
    </div>
    <div class="project-front" :style="computedPadding">
      <div class="project-header">
        <p class="project-name">
          {{ details.name }}
        </p>
        <p class="project-category">//{{ details.category }}</p>
      </div>

      <p class="project-timeframe">
        {{ details.timeframe }}
      </p>
      <div class="project-frameworks">
        <div
          class="project-framework"
          v-for="framework in details.frameworks"
          :key="framework"
        >
          {{ framework }}
        </div>
      </div>
      <div class="project-links">
        <div
          class="project-link"
          v-for="link in details.links"
          :key="link"
        ></div>
        {{ link }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-item {
  position: relative;
  width: 80vw;
  margin-top: 20px;
}

.project-front,
.project-back {
  border-radius: 10px;
  background-color: rgba(43, 41, 57, 0.5);
  backdrop-filter: blur(3px);
  padding: 10px;
}

.project-back {
  position: absolute;
}

.project-front {
  position: relative;
}

.open .project-front {
  padding-bottom: var(--padding);
}

.closed .project-front,
.open .project-back {
  border: 2px solid #927aff;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding-bottom 0.3s,
    position 0.3s, z-index 0.3s;
}

.open .project-front,
.closed .project-back {
  border: 2px solid #765fdc;
  top: 8px;
  bottom: -8px;
  left: 8px;
  right: -8px;
  z-index: 10;
  transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding-bottom 0.3s,
    position 0.3s, z-index 0.3s;
}

.project-name {
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: white;
}

.project-category {
  text-transform: uppercase;
  line-height: 1.3rem;
}

.open .project-front *,
.closed .project-back * {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.closed .project-front *,
.open .project-back * {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.project-frameworks {
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
  font-family: monospace;
  justify-content: flex-end;
}

.project-description {
  color: white;
  font-size: 1rem;
  line-height: 1.3rem;
}

@media (min-width: 480px) {
}

@media (min-width: 768px) {
  .project-header {
    display: flex;
    gap: 10px;
    align-items: flex-end;
    flex-wrap: wrap;
  }
}

@media (min-width: 1024px) {
}
</style>

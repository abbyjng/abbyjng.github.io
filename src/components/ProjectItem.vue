<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import axios from "axios";

import FlipIcon from "./icons/FlipIcon.vue";

const props = defineProps({
  details: JSON,
  index: Number,
});

const opened = ref(false);
const computedPadding = ref({});
const hovered = ref(false);
const descriptionHTML = ref("<div></div>");
const coverImage = ref();

function computePadding() {
  const backWindow =
    document.getElementsByClassName("project-back")[props.index];
  const frontWindow =
    document.getElementsByClassName("project-front")[props.index];

  backWindow.style.position = "relative";

  const frontWindowPaddingStr = window.getComputedStyle(
    frontWindow,
    null
  ).paddingBottom;

  const frontWindowPadding = parseInt(
    frontWindowPaddingStr.substring(0, frontWindowPaddingStr.length - 2)
  );

  const backWindowHeight = backWindow.offsetHeight;
  const frontWindowHeight = frontWindow.offsetHeight;

  computedPadding.value = {
    "--padding":
      backWindowHeight - (frontWindowHeight - frontWindowPadding) + "px",
  };

  backWindow.style.position = "absolute";
}

function toggleClick() {
  if (opened.value) {
    opened.value = false;
  } else {
    opened.value = true;
  }
}

function close() {
  if (opened.value) {
    opened.value = false;
  }
}

var resizeTimer;
function delayResizeUpdate() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(computePadding, 100);
}

onMounted(() => {
  window.addEventListener("resize", delayResizeUpdate);
  axios
    .get(
      `https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/projects/${props.details.description}.html`
    )
    .then((response) => {
      descriptionHTML.value = response.data;
      // compute padding only after the description has been loaded in
      setTimeout(computePadding, 100);
    });
  if (props.details.coverPhoto) {
    axios
      .get(
        `https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/projects/images/${props.details.photoPrefix}-${props.details.coverPhoto}.png`
      )
      .then((response) => {
        console.log(response.data);
        coverImage.value = response.data;
      });
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", delayResizeUpdate);
});
</script>

<template>
  <div
    v-click-away="close"
    @click="toggleClick"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="opened ? 'project-item open' : 'project-item closed'"
  >
    <div class="project-back">
      <div class="project-description" v-html="descriptionHTML"></div>
    </div>
    <div class="project-front" :style="computedPadding">
      <div class="project-header">
        <div class="project-title">
          <p class="project-name">
            {{ details.name }}
          </p>
          <p class="project-category">//{{ details.category }}</p>
        </div>
        <div
          :class="[
            hovered ? 'hovered project-expand' : 'project-expand',
            'flex gap-1 items-center',
          ]"
        >
          Read more
          <FlipIcon class="w-3" />
        </div>
      </div>

      <p class="project-timeframe">
        {{ details.timeframe }}
      </p>
      <div class="project-bottom-bar">
        <div class="project-links">
          <div class="project-link" v-for="link in details.links" :key="link">
            <a :href="link.link">
              <component v-bind:is="link.icon"></component>
            </a>
          </div>
        </div>
        <div class="project-frameworks">
          <div
            class="project-framework"
            v-for="framework in details.frameworks"
            :key="framework"
          >
            {{ framework }};
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-item {
  position: relative;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
}

.project-front,
.project-back {
  border-radius: 10px;
  background-color: rgba(43, 41, 57, 0.7);
  backdrop-filter: blur(5px);
  padding: 10px;
}

.project-front:hover {
  background-color: rgba(54, 51, 74, 0.9);
  transition: background-color 0.3s;
}

.project-back {
  position: absolute;
  border: 2px solid #f5f1ff;
}

.project-front {
  position: relative;
  border: 2px solid #927aff;
}

.open .project-front {
  padding-bottom: var(--padding);
}

.closed .project-front,
.open .project-back {
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
  color: #f5f1ff;
}

.project-category {
  text-transform: uppercase;
  line-height: 1.3rem;
  font-family: monospace;
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

.project-bottom-bar {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  flex-wrap: wrap;
}

.project-frameworks {
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
  font-family: monospace;
  justify-content: flex-end;
}

.project-description {
  color: #f5f1ff;
  font-size: 1rem;
  line-height: 1.3rem;
}

.project-description:deep(div) {
  padding-bottom: 10px;
}

.project-links {
  display: flex;
  column-gap: 10px;
}

a {
  fill: #f5f1ff;
  transition: fill 0.3s;
}

a:hover {
  fill: #927aff;
  transition: fill 0.3s;
}

a::before {
  background-color: transparent;
}

a:hover::before {
  background-color: transparent;
}

.project-header {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  justify-content: space-between;
}

.project-expand {
  align-self: flex-start;
  white-space: nowrap;
  margin-right: 10px;
}

.project-expand.hovered {
  color: #927aff;
}

@media (min-width: 480px) {
}

@media (min-width: 768px) {
  .project-title {
    display: flex;
    column-gap: 10px;
    align-items: flex-end;
    flex-wrap: wrap;
  }
}

@media (min-width: 1024px) {
}
</style>

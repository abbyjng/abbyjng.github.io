<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import axios from "axios";

import FlipIcon from "./svgs/FlipIcon.vue";
import ArrowIcon from "./svgs/ArrowIcon.vue";

const props = defineProps({
  details: JSON,
  index: Number,
});

const opened = ref(false);
const computedPadding = ref({});
const descriptionHTML = ref("<div></div>");
const currImage = ref(-1);

function computePadding() {
  const backWindow =
    document.getElementsByClassName("project-back")[props.index];
  const frontWindow =
    document.getElementsByClassName("project-front")[props.index];

  let otherFrontWindowHeight = 0;
  let otherBackWindowHeight = 0;

  if (props.index === 1 || props.index === 2) {
    const otherFrontWindow =
      document.getElementsByClassName("project-front")[
        props.index === 1 ? 2 : 1
      ];
    otherFrontWindowHeight = otherFrontWindow.offsetHeight;

    const otherBackWindow =
      document.getElementsByClassName("project-back")[
        props.index === 1 ? 2 : 1
      ];
    otherBackWindow.style.position = "relative";
    otherBackWindowHeight = otherBackWindow.offsetHeight;
    otherBackWindow.style.position = "absolute";
  }

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
      Math.max(
        backWindowHeight - (frontWindowHeight - frontWindowPadding),
        10
      ) + "px",
    "--closed-row-height":
      Math.max(frontWindowHeight, otherFrontWindowHeight) + "px",
    "--open-height": Math.max(backWindowHeight, otherFrontWindowHeight) + "px",
    "--open-row-height":
      Math.max(frontWindowHeight, otherBackWindowHeight) + "px",
  };

  backWindow.style.position = "absolute";
}

function removeRowOpenClass() {
  const firstFrontWindow = document.getElementsByClassName("project-front")[1];
  firstFrontWindow.classList.remove("row-open");
  const secondFrontWindow = document.getElementsByClassName("project-front")[2];
  secondFrontWindow.classList.remove("row-open");
}

function toggleClick() {
  if (props.index === 1 || props.index === 2) {
    if (!opened.value) {
      const otherFrontWindow =
        document.getElementsByClassName("project-front")[
          props.index === 1 ? 2 : 1
        ];
      otherFrontWindow.classList.add("row-open");
    } else {
      removeRowOpenClass();
    }
  } else if (!opened.value) {
    removeRowOpenClass();
  }
  opened.value = !opened.value;
}

function close() {
  if (opened.value) {
    if (props.index === 1 || props.index === 2) {
      const otherFrontWindow =
        document.getElementsByClassName("project-front")[
          props.index === 1 ? 2 : 1
        ];
      otherFrontWindow.classList.remove("row-open");
    }
  }
  opened.value = false;
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
      // `https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/projects/${props.details.description}.html` TODO uncomment before deploying
      `../../projects/${props.details.description}.html`
    )
    .then((response) => {
      descriptionHTML.value = response.data;
      // compute padding only after the description has been loaded in

      if (props.details.coverPhoto) {
        // wait for cover photo to load in
        const coverPhoto = document.querySelector("#coverPhoto" + props.index);
        let otherCoverPhoto;
        if (props.index === 1 || props.index === 2) {
          otherCoverPhoto = document.querySelector(
            "#coverPhoto" + (props.index === 1 ? "2" : "1")
          );
        }

        if (coverPhoto.offsetHeight === 0) {
          // if this cover photo is not loaded, wait until it is
          coverPhoto.addEventListener("load", () => {
            if (otherCoverPhoto) {
              // if there is another photo in the row to wait for, check it
              checkOtherPhotoLoaded(otherCoverPhoto);
            } else {
              setTimeout(computePadding, 100);
            }
          });
        } else {
          // if this photo is loaded, check for another photo in the row to wait for
          if (otherCoverPhoto) {
            checkOtherPhotoLoaded(otherCoverPhoto);
          } else {
            setTimeout(computePadding, 100);
          }
        }
      } else {
        // otherwise okay to compute padding
        setTimeout(computePadding, 100);
      }
    });
});

function checkOtherPhotoLoaded(otherCoverPhoto) {
  if (otherCoverPhoto.offsetHeight === 0) {
    otherCoverPhoto.addEventListener("load", () => {
      setTimeout(computePadding, 100);
    });
  } else {
    setTimeout(computePadding, 100);
  }
}

function openCarousel(event) {
  currImage.value = parseInt(event.target.dataset.index);
}

function closeCarousel() {
  currImage.value = -1;
}

onUnmounted(() => {
  window.removeEventListener("resize", delayResizeUpdate);
});
</script>

<template>
  <div
    v-click-away="close"
    @click="toggleClick"
    :class="[
      opened ? 'open' : 'closed',
      'group relative w-full cursor-pointer',
    ]"
  >
    <transition
      enter-active-class="transition-opacity opacity-0 duration-300"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-to-class="opacity-0"
    >
      <div
        v-if="currImage !== -1 && props.details.photos"
        class="fixed w-screen h-screen top-0 left-0 bg-darkPurple/50 backdrop-blur z-[5000] cursor-default"
        @click.stop="closeCarousel"
      >
        <div class="w-full h-[90vh]">
          <template v-for="(photo, index) in props.details.photos">
            <transition
              enter-active-class="transition opacity-0 duration-300"
              enter-to-class="opacity-100"
              leave-active-class="transition duration-300"
              leave-to-class="opacity-0"
            >
              <div
                v-if="index === currImage"
                class="absolute w-full h-full flex justify-center items-center"
              >
                <img
                  :src="`https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/projects/images/${props.details.photoPrefix}-${photo}.png`"
                  class="max-h-[calc(80vh-100px)] lg:max-h-[80vh] md:max-w-[75vw]"
                />
              </div>
            </transition>
          </template>
          <ArrowIcon
            v-if="currImage !== 0"
            class="-rotate-90 fill-blueWhite hover:fill-brightPurple transition-fill duration-300 cursor-pointer absolute lg:top-[50%] left-[calc(50%-100px)] bottom-12"
            @click.stop="currImage--"
          />
          <ArrowIcon
            v-if="currImage + 1 !== props.details.photos.length"
            class="rotate-90 fill-blueWhite hover:fill-brightPurple transition-fill duration-300 cursor-pointer absolute lg:top-[50%] right-[calc(50%-100px)] bottom-12"
            @click.stop="currImage++"
          />
        </div>
        <div class="flex justify-center gap-5 w-full">
          <div
            v-for="(_, index) in props.details.photos"
            :class="[
              'w-3 h-3 rounded-full border border-blueWhite',
              index === currImage
                ? 'bg-blueWhite'
                : 'cursor-pointer hover:bg-blueWhite/50 transition duration-300',
            ]"
            @click.stop="currImage = index"
          ></div>
        </div>
      </div>
    </transition>
    <div
      class="project-back rounded-[10px] bg-[#2b2939]/[.7] backdrop-blur-sm p-2.5 md:p-4 absolute border-2 border-blueWhite"
    >
      <div
        class="text-blueWhite text-base leading-[1.3rem]"
        v-html="descriptionHTML"
      ></div>
      <div
        v-if="props.details.photos && props.details.photos.length !== 0"
        class="flex flex-wrap justify-center md:justify-end w-full mt-8 gap-3"
      >
        <div v-for="(photo, index) in props.details.photos">
          <img
            :src="`https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/projects/images/${props.details.photoPrefix}-${photo}.png`"
            :data-index="index"
            class="rounded-lg w-24 h-24 object-cover object-left-top"
            @click.stop="openCarousel"
          />
        </div>
      </div>
    </div>
    <div
      class="project-front rounded-[10px] bg-[#2b2939]/[.7] backdrop-blur-sm p-2.5 hover:bg-[#36334a]/[.9] transition-[background-color] transition-300 relative border-2 border-brightPurple flex flex-col justify-between"
      :style="computedPadding"
    >
      <div>
        <div class="flex gap-2.5 items-end justify-between">
          <div class="md:flex md:gap-x-2.5 md:items-end md:flex-wrap">
            <p class="text-lg leading-[1.5rem] font-bold text-blueWhite">
              {{ details.name }}
            </p>
            <p class="uppercase leading-[1.3rem] font-[monospace]">
              //{{ details.category }}
            </p>
          </div>
          <div
            :class="[
              'group-hover:text-lightPurple flex gap-1 items-center self-start whitespace-nowrap mr-2.5',
            ]"
          >
            Read more
            <FlipIcon class="w-3" />
          </div>
        </div>

        <p>
          {{ details.timeframe }}
        </p>
        <div
          :class="[
            'gap-10 items-center mx-4 justify-center',
            index === 1 || index === 2
              ? 'lg:flex lg:justify-between'
              : 'md:flex md:justify-between',
          ]"
        >
          <div
            :class="[
              'relative w-full shrink-0',
              index === 1 || index === 2 ? 'lg:w-1/2' : 'md:w-1/2',
            ]"
          >
            <div>
              <img
                :src="`https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/projects/images/${props.details.photoPrefix}-${props.details.coverPhoto}.png`"
                v-if="props.details.coverPhoto"
                :id="'coverPhoto' + index"
                v-bind:is-loaded="true"
                class="my-6 rounded-lg w-full"
              />
              <img
                :src="`https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/projects/images/${props.details.photoPrefix}-icon.png`"
                v-if="props.details.coverPhoto"
                :class="[
                  'absolute -right-3 -bottom-3 rounded-lg',
                  index === 1 || index === 2
                    ? 'lg:w-[50px] w-[75px]'
                    : 'w-[75px]',
                ]"
              />
            </div>
          </div>
          <div class="text-blueWhite text-base">
            {{ props.details.summary }}
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-3 gap-x-2.5 flex-wrap">
        <div class="flex gap-x-2.5">
          <div v-for="link in details.links" :key="link">
            <a
              :href="link.link"
              target="_blank"
              @click.stop
              class="fill-blueWhite !transition !duration-300 !ease-linear hover:fill-brightPurple no-underline"
            >
              <component v-bind:is="link.icon"></component>
            </a>
          </div>
        </div>
        <div class="flex gap-x-2.5 flex-wrap font-[monospace] justify-end">
          <div v-for="framework in details.frameworks" :key="framework">
            {{ framework }};
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.open .project-front {
  padding-bottom: var(--padding);
  height: var(--open-height);
}

.closed .project-front.row-open {
  height: var(--open-row-height);
}

.closed .project-front:not(.row-open) {
  height: var(--closed-row-height);
}

.closed .project-front,
.open .project-back {
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s, padding-bottom 0.3s,
    position 0.3s, z-index 0.3s, height 0.2s;
}

.open .project-front,
.closed .project-back {
  top: 8px;
  bottom: -8px;
  left: 8px;
  right: -8px;
  z-index: 10;
  transition: top 0.3s, right 0.3s, bottom 0.3s, left 0.3s,
    padding-bottom 0.3s 0.3s, position 0.3s 0.3s, z-index 0.3s, height 0.2s;
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
</style>

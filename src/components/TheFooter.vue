<script setup>
import { ref } from "vue";

import EmailIcon from "./svgs/EmailIcon.vue";
import GithubIcon from "./svgs/GithubIcon.vue";
import LinkedInIcon from "./svgs/LinkedInIcon.vue";

const emailHover = ref(false);
const githubHover = ref(false);
const linkedinHover = ref(false);
</script>

<template>
  <div
    class="fixed left-0 bottom-0 right-0 flex justify-center items-end gap-6 pb-5 pt-[30px] bg-darkPurple/50 backdrop-blur-sm z-[1000] sm:gap-4 sm:bg-transparent sm:backdrop-blur-none"
  >
    <div
      class="hidden sm:block sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:h-[100px] sm:w-[200px] sm:rounded-t-full sm:bg-darkPurple/50 sm:backdrop-blur-sm"
    ></div>
    <a
      href="mailto:ajng@umich.edu"
      target="_blank"
      class="no-underline"
      @mouseover="emailHover = true"
      @mouseleave="emailHover = false"
    >
      <div
        id="email-icon"
        :class="emailHover ? 'hovering icon-div' : 'icon-div'"
      >
        <EmailIcon />
      </div>
    </a>
    <a
      href="https://github.com/abbyjng"
      target="_blank"
      class="no-underline"
      @mouseover="githubHover = true"
      @mouseleave="githubHover = false"
    >
      <div
        id="github-icon"
        :class="githubHover ? 'hovering icon-div' : 'icon-div'"
      >
        <GithubIcon />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/abigail-j-ng/"
      target="_blank"
      class="no-underline"
      @mouseover="linkedinHover = true"
      @mouseleave="linkedinHover = false"
    >
      <div
        id="linkedin-icon"
        :class="linkedinHover ? 'hovering icon-div' : 'icon-div'"
      >
        <LinkedInIcon />
      </div>
    </a>
  </div>
</template>

<style scoped>
.icon-div {
  background-image: linear-gradient(to left, #c2b5fc, #c2b5fc 50%, #ffffff 50%);
  background-size: 200% 100%;
  background-position: 0;
  transition: all 0.3s ease-in-out;
}

.icon-div.hovering {
  background-position: -100%;
}

#email-icon {
  -webkit-clip-path: url(#email-clip);
  clip-path: url(#email-clip);
}

#linkedin-icon {
  -webkit-clip-path: url(#linkedin-clip);
  clip-path: url(#linkedin-clip);
}

#github-icon {
  -webkit-clip-path: url(#github-clip);
  clip-path: url(#github-clip);
}
</style>

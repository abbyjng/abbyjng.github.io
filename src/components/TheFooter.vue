<script setup>
import { ref } from "vue";

import EmailIcon from "./icons/EmailIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";

const emailHover = ref(false);
const githubHover = ref(false);
const linkedinHover = ref(false);
</script>

<template>
  <div class="footer">
    <div id="shape"></div>
    <a
      href="mailto:ajng@umich.edu"
      target="_blank"
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
      href="https://www.linkedin.com/in/abigail-j-ng/ "
      target="_blank"
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
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;
  padding-bottom: 20px;
  padding-top: 30px;
  background-color: rgba(43, 41, 57, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
}

.footer #shape {
  display: none;
}

.footer a::before,
.footer a:hover::before {
  background-color: transparent;
}

.icon-div {
  background-image: linear-gradient(to left, #927aff, #927aff 50%, #ffffff 50%);
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

@media (min-width: 480px) {
  .footer {
    gap: 15px;
    background-color: transparent;
    backdrop-filter: none;
  }

  .footer #shape {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100px;
    width: 200px;
    border-radius: 150px 150px 0 0;
    background-color: rgba(43, 41, 57, 0.5);
    backdrop-filter: blur(5px);
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}
</style>

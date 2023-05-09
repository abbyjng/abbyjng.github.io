<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import IntroSection from "./components/IntroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import TheFooter from "./components/TheFooter.vue";
import TheLogo from "./components/TheLogo.vue";
import BackToTopArrow from "./components/BackToTopArrow.vue";

const scrollY = ref(0);

const introInView = ref(false);
const aboutInView = ref(false);
const projectsInView = ref(false);
const contactInView = ref(false);

function isInView(sectionName) {
  let section = document.getElementById(sectionName);

  if (
    section.offsetTop <= window.scrollY + section.offsetHeight / 2 &&
    section.offsetTop + section.offsetHeight >
      window.scrollY + section.offsetHeight / 2
  ) {
    return true;
  } else {
    return false;
  }
}

function handleScroll() {
  introInView.value = isInView("introSection");
  aboutInView.value = isInView("aboutSection");
  projectsInView.value = isInView("projectsSection");
  contactInView.value = isInView("contactSection");

  scrollY.value = window.scrollY;
}

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header>
    <TheNavbar current="" />
  </header>

  <main class="max-w-[1024px] mx-[10%]">
    <div id="introSection" class="section">
      <IntroSection :isInView="introInView" />
    </div>
    <div id="aboutSection" class="section relative">
      <div id="about" class="absolute -top-[20vh]"></div>
      <AboutSection :isInView="aboutInView" />
    </div>
    <div id="projectsSection" class="section relative">
      <div id="projects" class="absolute top-0"></div>
      <ProjectsSection :isInView="projectsInView" />
    </div>
    <div id="contactSection" class="section relative">
      <div id="contact" class="absolute -top-[20vh]"></div>
      <ContactSection :isInView="contactInView" />
    </div>
    <TheFooter />
    <TheLogo />
    <BackToTopArrow
      :class="
        scrollY >= 800 ? 'opacity-1' : 'opacity-0' + ' transition duration-300'
      "
    />
  </main>
</template>

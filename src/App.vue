<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import IntroSection from "./components/IntroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";

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
  introInView.value = isInView("intro");
  aboutInView.value = isInView("about");
  projectsInView.value = isInView("projects");
  contactInView.value = isInView("contact");
}

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header>
    <TheNavbar current="" />
  </header>

  <main>
    <div id="intro" class="section">
      <IntroSection :isInView="introInView" />
    </div>
    <div id="about" class="section">
      <AboutSection :isInView="aboutInView" />
    </div>
    <div id="projects" class="section">
      <ProjectsSection :isInView="projectsInView" />
    </div>
    <div id="contact" class="section">
      <ContactSection :isInView="contactInView" />
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>

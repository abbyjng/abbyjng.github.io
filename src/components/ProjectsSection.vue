<script setup>
import { ref } from "vue";
import json from "./json/projects.json";
import ProjectItem from "./ProjectItem.vue";
import DownloadIcon from "./icons/DownloadIcon.vue";

defineProps({
  isInView: Boolean,
});

const data = ref(json);
</script>

<template>
  <div>
    <p class="section-header">myWork();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <div id="project-opener">
        <h1>What I've made</h1>
        <div id="resume">
          <DownloadIcon />
          <a
            id="resume-link"
            href="https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/files/Abigail_Ng_Resume.pdf"
            download
            >Résumé</a
          >
        </div>
      </div>
      <div v-for="(project, index) in data" :key="project.name">
        <ProjectItem :details="project" :index="index" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#project-opener {
  display: flex;
  justify-content: space-between;
}

#resume {
  padding: 10px 16px 10px 16px;
  background-color: #383740;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

#resume-link {
  color: #f5f1ff;
}

svg {
  width: 18px;
  height: 18px;
}

#resume:hover {
  background-color: #33323a;
}

#resume-link::before {
  background-color: transparent;
}

#resume-link:hover::before {
  background-color: transparent;
}

@media (min-width: 480px) {
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}
</style>

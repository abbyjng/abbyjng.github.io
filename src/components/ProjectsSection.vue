<script setup>
import { ref } from "vue";
import json from "./json/projects.json";
import ProjectItem from "./ProjectItem.vue";

defineProps({
  isInView: Boolean,
});

const data = ref(json);

console.log(data);
</script>

<template>
  <div>
    <p class="section-header">myWork();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <h1>What I've made</h1>
      <div v-for="(project, index) in data" :key="project.name">
        <ProjectItem :details="project" :index="index" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 480px) {
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}
</style>

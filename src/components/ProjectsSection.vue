<script setup>
import { ref } from "vue";
import json from "./json/projects.json";
import ProjectItem from "./ProjectItem.vue";
import DownloadIcon from "./svgs/DownloadIcon.vue";

defineProps({
  isInView: Boolean,
});

const data = ref(json);
</script>

<template>
  <div>
    <p class="section-header">myWork();</p>
    <div :class="isInView ? 'in-view section-body' : 'section-body'">
      <div class="flex justify-between">
        <h1>What I've made</h1>
        <div
          id="resume"
          class="py-2.5 px-4 bg-[#383740] rounded-[5px] flex items-center gap-[5px] hover:bg-[#33323a]"
        >
          <DownloadIcon class="w-[18px] h-[18px]" />
          <a
            id="resume-link"
            href="https://raw.githubusercontent.com/abbyjng/abbyjng.github.io/gh-pages/files/Abigail_Ng_Resume.pdf"
            download
            class="no-underline text-blueWhite hover:text-blueWhite"
            target="_blank"
            >Résumé</a
          >
        </div>
      </div>
      <div class="grid gap-5 mt-3">
        <div
          v-for="(project, index) in data"
          :key="project.name"
          class="h-full"
        >
          <ProjectItem :details="project" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import NavbarItem from "./NavbarItem.vue";
defineProps({
  current: {
    type: String,
    required: true,
  },
});

const menuOpen = ref(false);

function clickMenu() {
  let navbarLinks = document.getElementById("navbar-links");
  if (window.getComputedStyle(navbarLinks, null).display == "none") {
    menuOpen.value = true;
  } else {
    menuOpen.value = false;
  }
}

function clickNavitem() {
  menuOpen.value = false;
}
</script>

<template>
  <div class="navbar">
    <h1 id="name">Abigail Ng</h1>
    <div id="menu-button" :class="menuOpen ? 'clicked' : ''" @click="clickMenu">
      <div id="top"></div>
      <div id="bottom"></div>
    </div>
    <div
      id="navbar-links"
      :class="menuOpen ? 'open' : ''"
      @click="clickNavitem"
    >
      <NavbarItem name="about" :isCurrent="current == 'about'"></NavbarItem>
      <NavbarItem
        name="projects"
        :isCurrent="current == 'projects'"
      ></NavbarItem>
      <NavbarItem name="contact" :isCurrent="current == 'contact'"></NavbarItem>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px;
  background-color: rgba(31, 30, 37, 0.9);
  backdrop-filter: blur(5px);
}

#navbar-links {
  display: none;
  background-color: none;
  backdrop-filter: none;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

#navbar-links.open {
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(31, 30, 37, 0.9);
  backdrop-filter: blur(3px);
  opacity: 1;
}

#name {
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  align-self: flex-end;
}

#menu-button {
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1000;
}

#menu-button div {
  position: absolute;
  width: 30px;
  height: 2px;
  background: white;
}

#menu-button #top {
  top: 8px;
  left: 0;
  right: 0;
  transition: rotate 0.2s, top 0.2s 0.2s ease-out;
}

#menu-button #bottom {
  bottom: 8px;
  left: 0;
  right: 0;
  transition: rotate 0.2s, bottom 0.2s 0.2s ease-out;
}

#menu-button.clicked #top {
  top: 14px;
  rotate: 45deg;
  transition: top 0.2s, rotate 0.2s 0.2s ease-out;
}

#menu-button.clicked #bottom {
  bottom: 14px;
  rotate: -45deg;
  transition: bottom 0.2s, rotate 0.2s 0.2s ease-out;
}

@media (min-width: 480px) {
}

@media (min-width: 768px) {
  #menu-button {
    display: none;
  }
  #navbar-links {
    display: flex;
    flex-direction: row;
    gap: 20px;
    opacity: 1;
    background-color: none;
    backdrop-filter: none;
  }
}

@media (min-width: 1024px) {
}
</style>

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
</script>

<template>
  <div
    class="flex justify-between items-center px-10 pb-6 py-8 bg-darkPurple/80 backdrop-blur-sm"
  >
    <div>
      <a class="no-underline" href="#">
        <img src="./images/logo.png" class="h-[30px] mb-[5px]" />
      </a>
    </div>
    <div
      id="menu-button"
      :class="[
        menuOpen ? 'clicked' : '',
        'relative w-[30px] h-[30px] cursor-pointer z-[1000] md:hidden',
      ]"
      @click="clickMenu"
    >
      <div
        id="top"
        class="absolute w-[30px] h-0.5 bg-blueWhite top-2 left-0 right-0"
      ></div>
      <div
        id="bottom"
        class="absolute w-[30px] h-0.5 bg-blueWhite bottom-2 left-0 right-0"
      ></div>
    </div>
    <div
      id="navbar-links"
      :class="[
        menuOpen
          ? 'flex flex-col top-0 bottom-0 right-0 left-0 h-screen items-center justify-center fixed bg-darkPurple/90 backdrop-blur'
          : 'hidden',
        'transition duration-[400ms] ease-in-out md:h-auto md:relative md:flex md:flex-row gap-5 opacity-100 bg-transparent',
      ]"
      @click="menuOpen = false"
    >
      <NavbarItem name="home" :isCurrent="current == 'home'"></NavbarItem>
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
#menu-button #top {
  transition: rotate 0.2s, top 0.2s 0.2s ease-out;
}

#menu-button #bottom {
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
</style>

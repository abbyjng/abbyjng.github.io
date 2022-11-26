<script setup>
import NavbarItem from "./NavbarItem.vue";
defineProps({
  current: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="navbar">
    <h1 id="name">Abigail Ng</h1>
    <div class="navbar-links">
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
  padding: 20px;
}

.navbar-links {
  display: flex;
  flex-direction: column;
}

#name {
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-transform: lowercase;
  align-self: flex-end;
}

@media (min-width: 480px) {
}

@media (min-width: 768px) {
  .navbar-links {
    flex-direction: row;
    gap: 20px;
  }
}

@media (min-width: 1024px) {
}
</style>

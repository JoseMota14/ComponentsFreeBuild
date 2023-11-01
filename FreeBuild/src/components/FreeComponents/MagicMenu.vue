<template>
  <nav class="nav">
    <ul class="nav_links">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        @click="handleItemClick(index)"
        :class="{ active: activeItem === index }"
      >
        <p href="#"><i :class="iconClasses(item)"></i></p>
      </li>
    </ul>
    <div class="nav_light" :style="{ left: lightLeft }"></div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const menuItems = ["One", "Two", "Tree", "Four", "Five"];
const activeItem = ref<number>(-1);

const handleItemClick = (index: number) => {
  activeItem.value = index;
};

const lightLeft = computed(() => {
  return `${(activeItem.value * 90) / (menuItems.length - 1)}%`;
});

const iconClasses = (item: string) => {
  return `bx bx-${iconMappings[item]}`;
};

const iconMappings = {
  One: "home-alt-2",
  Two: "heart",
  Tree: "plus-circle",
  Four: "user",
  Five: "bell",
};
</script>

<style scoped>
/* reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0c0117;
}

li {
  display: inline-block;
}

.nav {
  background-color: #191919bd;
  width: 100%;
  height: 8em;
  border-radius: 2em;
  padding: 0 2em;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.nav_links {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav_link a {
  color: #fff;
  font-size: 2.5rem;
  opacity: 0.5;
}

.nav_light {
  position: absolute;
  top: 0;
  left: 1.3em;
  background-color: #fff;
  width: 4em;
  height: 0.4em;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  transition: 0.3s ease;
}

.nav_light::before {
  content: "";
  width: 7em;
  height: 7em;
  position: absolute;
  top: 0.4em;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3) -50%,
    rgba(255, 255, 255, 0) 90%
  );
  clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%);
}

.nav_link.active a {
  opacity: 1;
}
</style>

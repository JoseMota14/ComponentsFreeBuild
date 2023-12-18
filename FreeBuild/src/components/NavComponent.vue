<script setup lang="ts">
import { ref } from "vue";
import CardFlip from "../components/FreeComponents/CardFlip.vue";
import CardHover from "../components/FreeComponents/CardHover.vue";
import CardSlide from "../components/FreeComponents/CardSl.vue";
import CheckBoxCircle from "../components/FreeComponents/CheckBoxCircle.vue";
import GeoLoading from "../components/FreeComponents/GeoLoading.vue";
import Geos from "../components/FreeComponents/Geos.vue";
import HoverText from "../components/FreeComponents/HoverText.vue";
import InfiniteLoading from "../components/FreeComponents/InfiniteLoading.vue";
import Input from "../components/FreeComponents/Input.vue";
import List from "../components/FreeComponents/List.vue";
import MagicMenu from "../components/FreeComponents/MagicMenu.vue";
import Push from "../components/FreeComponents/Push.vue";
const menuItems = [
  "MagicMenu",
  "Loadings",
  "Texts",
  "Cards",
  "Inputs",
  "Checkbox",
  "List",
];
const activeItem = ref(-1);

const handleItemClick = (index: number) => {
  activeItem.value = index;
};
</script>

<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleItemClick(index)"
          :class="{ active: activeItem === index }"
        >
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </nav>
    <div class="center-container">
      <div class="content" v-if="activeItem === 0">
        <MagicMenu />
      </div>
      <div class="content" v-if="activeItem === 1">
        <InfiniteLoading />
      </div>
      <div class="content" v-if="activeItem === 1">
        <GeoLoading />
      </div>
      <div class="content" v-if="activeItem === 1">
        <Geos />
      </div>

      <div v-if="activeItem === 2">
        <HoverText />
      </div>

      <div v-if="activeItem === 2">
        <Push />
      </div>
      <div v-if="activeItem === 3">
        <CardHover />
      </div>
      <div v-if="activeItem === 3">
        <CardFlip />
      </div>
      <div v-if="activeItem === 3">
        <CardSlide />
      </div>

      <div v-if="activeItem === 4">
        <Input />
      </div>
      <div v-if="activeItem === 5">
        <CheckBoxCircle />
      </div>
      <div v-if="activeItem === 6">
        <List />
      </div>
    </div>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
.content {
  width: 50%;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

nav {
  background-color: #2b21219d;
  border-radius: 5px;
  overflow-y: auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #a5a5a5;
  border-radius: 5px;
  display: inline;
  margin: 0 25px;
  padding: 5px;
}

li.active {
  background-color: #3a35279d;
}

a {
  text-decoration: none;
  color: #ffffff8a;
  font-size: 15px;
  transition: color 0.3s;
}

a:hover {
  color: #ffffff;
}
</style>

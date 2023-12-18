<script setup lang="ts"></script>

<template>
  <div class="cards">
    <div class="card red">
      <p>a</p>
      <p>value</p>
    </div>
    <div class="card blue">
      <p>b</p>
      <p>value</p>
    </div>
    <div class="card green">
      <p>c</p>
      <p>value</p>
    </div>
  </div>
</template>

<style scoped>
.cards {
  gap: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.card {
  border-radius: 10px;
  width: 200px;
  height: 100px;
  color: white;
  text-align: center;
  cursor: pointer;
  transform: 400ms;
}

.red {
  background-color: rgb(253, 195, 33);
}

.green {
  background-color: rgb(17, 150, 17);
}

.blue {
  background-color: rgb(74, 74, 197);
}

.card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
</style>

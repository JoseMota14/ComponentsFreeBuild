<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="content">
      <div class="display-front"><p>a</p></div>
      <div class="display-back"><p>b</p></div>
      <div class="display-tr"><p>c</p></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-left: 10px;
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.content {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.card:hover .content {
  transform: rotateY(180deg);
}

.card:active .display-tr {
  z-index: 100;
}

.display-front,
.display-back,
.display-tr {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.display-front {
  background-color: #6a2c70;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(0deg);
}

.display-back {
  background-color: #f08a5d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
}

.display-tr {
  background-color: #5df0ab;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  transform: rotateY(180deg);
}
</style>

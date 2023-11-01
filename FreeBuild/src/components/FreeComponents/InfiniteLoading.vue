<script setup lang="ts"></script>

<template>
  <h1>
    <span class="label1">l</span>
    <span class="label2">o</span>
    <span class="label3">a</span>
    <span class="label4">d</span>
    <span class="label5">i</span>
    <span class="label6">n</span>
    <span class="label7">g</span>
  </h1>
</template>

<style scoped>
h1 {
  font-family: monospace;
  height: 100px;
}

span {
  position: relative;
  top: 0.63em;
  display: inline-block;
  text-transform: uppercase;
  opacity: 0;
  transform: rotateX(-90deg);
}

.label1 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.2s;
}
.label2 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.3s;
}

.label3 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.4s;
}

.label4 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.5s;
}

.label5 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.6s;
}

.label6 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.7s;
}

.label7 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.8s;
}

@keyframes drop {
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
    top: 0.78em;
    transform: rotateX(-360deg);
  }
  80% {
    opacity: 1;
    top: 2.78em;
    transform: rotateX(-360deg);
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    top: 4.78em;
  }
}
</style>

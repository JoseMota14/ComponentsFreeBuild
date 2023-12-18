<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="card"><p class="instagram">IG</p></div>
    <div class="card"><p class="face">Face</p></div>
    <div class="card"><p class="instagram">Twitter</p></div>
    <div class="card"><p class="instagram">Reddit</p></div>
    <div class="card"><p class="instagram">I</p></div>
    <div class="card"><p class="instagram">I</p></div>
    <div class="card"><p class="instagram">I</p></div>
    <div class="card"><p class="instagram">I</p></div>
    <div class="card"><p class="instagram">I</p></div>
    <p class="text">HOVER FOR SOCIAL</p>
    <div class="main_back"></div>
  </div>
</template>

<style scoped>
.main_back {
  position: absolute;
  width: 11em;
  height: 11em;
  background: linear-gradient(90deg, #03a9f4, #cc39a4, #ffb5d2);
  z-index: -2;
}

.main {
  display: flex;
  flex-wrap: wrap;
  width: 14em;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.card {
  width: 60px;
  height: 60px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
    0.2s background-image ease-in-out;
  background: rgba(255, 255, 255, 0.596);
  backdrop-filter: blur(5px);
  border: 1px solid transparent;
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card .instagram {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #cc39a4;
}

.card .face {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #00295f;
}

.card:nth-child(5) {
  border-radius: 0px;
}

.card:nth-child(6) {
  border-radius: 0px;
}

.card:nth-child(7) {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(8) {
  border-radius: 0px;
}

.card:nth-child(9) {
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
}

.main:hover {
  width: 14em;
  cursor: pointer;
}

.main:hover .main_back {
  opacity: 0;
}

.main:hover .card {
  margin: 0.2em;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
}

.main:hover .card:nth-child(5) {
  border: transparent;
}

.main:hover .instagram {
  opacity: 1;
}

.main:hover .face {
  opacity: 1;
}

.card:nth-child(1):hover {
  background-color: #cc39a4;
}

.card:nth-child(2):hover {
  background-color: #03a9f4;
}

.text {
  position: absolute;
  font-size: 0.7em;
  transition: 0.4s ease-in-out;
  z-index: 0;
}
.main:hover .text {
  opacity: 0;
  z-index: -3;
}

.card:nth-child(2):hover .face {
  animation: sss 1.2s ease-in-out infinite;
}

@keyframes sss {
  0% {
    transform: rotateY(45deg);
  }
  25% {
    transform: rotateY(100deg);
  }
  50% {
    transform: rotateY(150deg);
  }
  75% {
    transform: rotateY(200deg);
  }
  100% {
    transform: rotateY(250deg);
  }
}
</style>

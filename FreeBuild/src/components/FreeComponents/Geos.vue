<script setup lang="ts"></script>

<template>
  <div class="spinner">
    <div class="bar bar-top"></div>
    <div class="bar bar-right"></div>
    <div class="bar bar-bottom"></div>
    <div class="bar bar-left"></div>
  </div>
</template>

<style scoped>
/* .spinner:nth-child(even) {
  background-color: red;
} */

/* spinner-4 styles */
.spinner {
  display: absolute;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* animation: rotation 12.8s steps(1) 0s infinite; */
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes bar-top {
  0% {
    transform: scale(0, 1);
  }
  12.5% {
    transform: scale(1, 1);
  }
  87.5% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0, 1);
  }
}

@keyframes bar-right {
  0% {
    transform: scale(1, 0);
  }
  12.5% {
    transform: scale(1, 0);
  }
  25% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(1, 1);
  }
  87.5% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 0);
  }
}

@keyframes bar-bottom {
  0% {
    transform: scale(0, 1);
  }
  25% {
    transform: scale(0, 1);
  }
  37.5% {
    transform: scale(1, 1);
  }
  62.5% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(0, 1);
  }
}

@keyframes bar-left {
  0% {
    transform: scale(1, 0);
  }
  37.5% {
    transform: scale(1, 0);
  }
  50% {
    transform: scale(1, 1);
  }
  62.5% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 0);
  }
}

.spinner .bar {
  background-color: red;
}

.spinner .bar-top {
  width: 100px;
  height: 8px;
  transform-origin: left top;
  animation: bar-top 3.2s linear 0s infinite;
}

.spinner .bar-right {
  width: 8px;
  margin-left: 92px;
  height: 100px;
  transform-origin: left top;
  animation: bar-right 3.2s linear 0s infinite;
}

.spinner .bar-bottom {
  width: 100px;
  height: 8px;
  transform-origin: right top;
  animation: bar-bottom 3.2s linear 0s infinite;
}

.spinner .bar-left {
  width: 8px;
  height: 100px;
  margin-top: -100px;
  transform-origin: left bottom;
  animation: bar-left 3.2s linear 0s infinite;
}
</style>

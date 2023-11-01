<script setup lang="ts"></script>

<template>
  <body>
    <div class="bar">
      <div class="circle"></div>
      <p>LOADING</p>
    </div>
  </body>
</template>

<style scoped>
body {
  background-color: #347fc3;
  width: 100%;
  height: 118px;
  overflow-x: hidden;
  overflow-y: hidden;
}

.bar {
  position: relative;
  height: 2px;
  width: 500px;
  margin: 0 auto;
  background: #fff;
  margin-top: 70px;
}

.circle {
  position: absolute;
  top: -50px;
  margin-left: -50px;
  height: 60px;
  width: 60px;
  left: 0;
  background: #fff;
  border-radius: 30%;
  -webkit-animation: move 5s infinite;
}
p {
  position: absolute;
  top: -30px;
  right: 0px;
  color: #347fc3;
  font-weight: bold;
}

@-webkit-keyframes move {
  0% {
    left: 0;
  }
  50% {
    left: 95%;
    -webkit-transform: rotate(450deg);
    width: 80px;
    height: 80px;
  }
  75% {
    left: 95%;
    -webkit-transform: rotate(450deg);
    width: 80px;
    height: 80px;
  }
  100 {
    right: 100%;
  }
}
</style>

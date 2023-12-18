<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="content">
      <p class="header">Header</p>
      <p class="more">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        laboriosam at voluptas minus culpa deserunt delectus sapiente inventore
        pariatur
      </p>
      <button class="btn">Do something</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #ff0f7b;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000000;
}

.heading {
  font-weight: 700;
  font-size: 32px;
}

.btn {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  border-radius: 5px;
}

.card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  z-index: -2;
  transition: all 0.5s ease-in-out;
}

.card::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  z-index: -2;
  transition: all 0.5s ease-in-out;
}

.card:hover::before {
  height: 50%;
}

.card:active::after {
  height: 50%;
}

.card:hover .btn {
  color: #212121;
  background: #e8e8e8;
}

.btn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}
</style>

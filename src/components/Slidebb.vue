<script setup>
import { ref } from 'vue'

const toggle = ref(false)
const switchSide = () => {
  toggle.value = !toggle.value
}

defineExpose({
  switchSide
})
defineProps({
  msg: String
})
</script>

<template>
<div class="slidebb-container" :class="{'slidebb-active': toggle}">
  <div class="side-content">
    <slot name="sideContent"></slot>
  </div>
  <div class="main-content">
    <slot name="mainContent"></slot>
  </div>
</div>
</template>

<style scoped>
.slidebb-container {
  position: relative;
  width: 100%;
}

.slidebb-container .side-content, .slidebb-container .main-content {
  position: absolute;
  transition: left 1s, right 1s;
}
.slidebb-container .side-content {
  width: 30%;
  left: 0%;
  z-index: 30;
}
.slidebb-container .main-content {
  width: 70%;
  right: 0%;
  z-index: 20;
}

.slidebb-container.slidebb-active .side-content {
  left: 70%;
  animation-name: slidingDistortion;
  animation-duration: 1s;
}
.slidebb-container.slidebb-active .main-content {
  right: 30%;
}

@keyframes slidingDistortion {
  0%   {width: 30%;}
  50%  {width: 50%;}
  100% {width: 30%;}
}
</style>

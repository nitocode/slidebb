<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Slidebb from './components/Slidebb.vue'
import { ref } from 'vue'

const slideRef = ref(null);
function toggleSwitch() {
  console.log("slideRef.value", slideRef);
  slideRef.value.switchSide()
}
</script>

<template>
  <div class="container">
    <Slidebb ref="slideRef" msg="Hello Vue 3 + Vite">
      <template #mainContent>
        <div class="main-content">
          Main
        </div>
      </template>
      <template #sideContent>
        <div class="side-content">
          Side
          <button @click="toggleSwitch()"></button>
        </div>
      </template>
    </Slidebb>

  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 1000px;
  margin: auto;
}
.side-content {
  background-color: aqua;
}
.main-content {
  background-color: grey;
}
</style>

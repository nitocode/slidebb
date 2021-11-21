<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Slidebb from './components/Slidebb.vue'
import { ref } from 'vue'

const slideRef = ref(null);
function toggleSwitch() {
  slideRef.value.switchSide()
}
</script>

<template>
  <div class="main-container">
    <Slidebb 
      class="slidebb-component"
      ref="slideRef" 
      :duration="1000" 
      sideTitleLeft="It's a girl" 
      sideSubtitleLeft="Oh you think it's gonna be a girl?" 
      sideTextButtonLeft="IT'S A BOY!" 
      sideTitleRight="It's a boy" 
      sideSubtitleRight="Oh you think it's gonna be a boy?" 
      sideTextButtonRight="IT'S A GIRL!">
      <template #mainRawContent>
        <div>
          Main
        </div>
      </template>
      <template #sideContentButtonLeft>

      </template>
      <template #sideContentTitleRight>
        <h2>It's a boy</h2>
      </template>
      <template #sideContentButtonRight>

      </template>
      <template #sideRawContent>
      </template>
    </Slidebb>

  </div>
</template>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: lightslategrey;
}
.main-container {
  width: 1000px;
  height: 500px;
  margin: auto;
  overflow: hidden;

  .slidebb-component {
    height: 500px;
  }
}
</style>

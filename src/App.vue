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
      :breakPoint="768"
      sideTitleLeft="It's a girl" 
      sideSubtitleLeft="Oh you think it's gonna be a girl?" 
      sideTextButtonLeft="IT'S A BOY!" 
      sideTitleRight="It's a boy" 
      sideSubtitleRight="Oh you think it's gonna be a boy?" 
      sideTextButtonRight="IT'S A GIRL!"
      forwardColor="#78ade0"
      reverseColor="#dc8ec2">
      <template #mainRawContentForward>
        <button class="btn btn-primary">Forward Button</button>
      </template>
      <template #mainRawContentReverse>
        <button class="btn btn-primary">Reverse Button</button>
      </template>
    </Slidebb>

  </div>
</template>

<style lang="scss" scoped>
.main-container {
  max-width: 1000px;
  height: 500px;
  margin: auto;
  overflow: hidden;

  .slidebb-component {
    height: 500px;
    border-radius: 15px;
    overflow: hidden;
  }
}
</style>

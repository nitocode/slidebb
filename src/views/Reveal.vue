<script setup>
import Pulse from './../components/Pulse.vue'
import { ref } from 'vue'

const step = ref(0)

const nextStepPulse = () => {
  if (step.value === 0) {
    step.value = 1

    setTimeout(() => {
      step.value = 2
    }, 6000);
  }
}


defineExpose({
  nextStepPulse,
})
</script>

<template>
  <div class="reveal-container h-screen w-screen flex justify-center items-center overflow-hidden" :class="`reveal-container-${step}`">
    <div class="pulse-container relative z-10" :class="{'pulse-container-aside': step > 0 && step < 5}">
      <Pulse @click="nextStepPulse()" />
    </div>
    <p class="instruction-text absolute top-1/2 left-1/2 opacity-0 transition-all ease-in-out z-0 text-lg lg:text-4xl text-center" :class="[ {'opacity-100': step === 1}]">Pull on the screen to discover our baby's gender...</p>
  </div>
</template>

<style lang="scss" scoped>
.reveal-container {
  
  .instruction-text {
    transition-duration: 2s;
  }

  &-0 {
    .instruction-text {
      transform: translate(-50%, -100%);
    }
  }

  &-1 {
    .instruction-text {
      transition-delay: 1s;
      transform: translate(-50%, -50%);
    }
  }
  &-2 {
    .instruction-text {
      transform: translate(-50%, 0%);
    }
  }
}
.pulse-container {
  width: 280px;
  height: 280px;
  transition: all 2s ease-in-out;
  :deep(.circle-content) {
    transition: opacity 1s ease-in-out;
  }

  &-aside {
    width: 150px;
    height: 150px;
    transform: translateX(calc(-50vw + 100%)) translateY(calc(-50vh + 100%));
    @media screen and (max-width: 768px) {
      transform: translateY(calc(-50vw - 30%));
    }
    :deep(.circle-content) {
      opacity: 0
    }
  }
}
</style>
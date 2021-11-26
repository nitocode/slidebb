<script setup>
import Pulse from './../components/Pulse.vue'
import { ref, onMounted } from 'vue'
import * as confetti from 'canvas-confetti'
import { useRoute } from 'vue-router'

const route = useRoute()
  
const step = ref(0)
const pulseText = ref("")
const fireCount = ref(0)
const myConfetti = ref(null)

const downPoint = ref({x: 0, y: 0})
const upPoint = ref({x: 0, y: 0})

const waitTextForNextStep = () => {
  setTimeout(() => {
    step.value++
    if (step.value > 6) {
      pulseText.value = "Reveal the gender"
    }
  }, 6000);
}

const nextStepPulse = () => {
  if (step.value === 0) {
    step.value = 1
    waitTextForNextStep()
  }
}

const fire = () => {
  console.log('downPoint.value.x', downPoint.value.x)
  console.log('downPoint.value.y', downPoint.value.y)
  const dx = -(upPoint.value.x - downPoint.value.x)
  const dy = upPoint.value.y - downPoint.value.y
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  const distance = Math.hypot(dx, dy)

  console.log('ang:', angle)

  console.log('distance:', Math.hypot(dx, dy))

  const firePower = distance*100
  console.log('firePower', firePower)

  myConfetti.value({
    particleCount: 1 + distance*100,
    startVelocity: firePower,
    spread: 55,
    angle: angle,
    origin: { x: downPoint.value.x, y: downPoint.value.y }
  });

  if (firePower > 20 && (step.value === 3 || step.value === 6)) {
    if (fireCount.value === 2) {
      fireCount.value = 0
      step.value++
      waitTextForNextStep()
    } else {
      fireCount.value++
    }
  }
}

onMounted(() => {
  pulseText.value = "Baby's heartbeat"
  const confettiCanvas = document.getElementById("confetti")
  myConfetti.value = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
  });

  confettiCanvas.addEventListener('pointerdown', (event) => {
    console.log('Pointer down event', event);
    downPoint.value.x = event.x / window.innerWidth
    downPoint.value.y = event.y / window.innerHeight
  });

  confettiCanvas.addEventListener('pointerup', (event) => {
    console.log('Pointer up event', event);
    upPoint.value.x = event.x / window.innerWidth
    upPoint.value.y = event.y / window.innerHeight
    fire()
  });

  document.querySelector(".instruction-text").addEventListener('transitionend', () => {
    if (step.value === 2 || step.value === 5) {
      step.value++
    }
  });
})


defineExpose({
  nextStepPulse,
  fire
})
</script>

<template>
<div class="reveal-container h-screen w-screen flex justify-center items-center overflow-hidden" :class="`reveal-container-${step}`">
    <!-- CONFETTI CANVAS -->
    <canvas class="absolute w-full h-full z-10" id="confetti"></canvas>
    <div class="pulse-container relative z-10" :class="[{'pulse-container-aside': step > 0 && step < 8}, {'pulse-container-girl': route.params.isGirlForm != null && route.params.isGirlForm === 'true'}, {'pulse-container-boy': route.params.isGirlForm != null && route.params.isGirlForm === 'false'}]">
      <Pulse @click="nextStepPulse()" :text="pulseText" />
    </div>
    <p class="instruction-text absolute top-1/2 left-1/2 opacity-0 transition-all ease-in-out z-0 text-lg lg:text-4xl text-center" :class="[ {'opacity-100': step === 1 || step === 4 || step === 7}]">
      <span v-if="step < 3">Pull on the screen to discover our baby's gender...</span>
      <span v-if="step >= 3 && step < 6">Is it a girl?</span>
      <span v-if="step >= 6 && step < 9">Or is it a boy?</span>
    </p>
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
  &-3 {
    .instruction-text {
      transform: translate(-50%, -100%);
    }
  }
  &-4 {
    .instruction-text {
      transform: translate(-50%, -50%);
    }
  }
  &-5 {
    .instruction-text {
      transform: translate(-50%, 0%);
    }
  }
  &-6 {
    .instruction-text {
      transform: translate(-50%, -100%);
    }
  }
  &-7 {
    .instruction-text {
      transform: translate(-50%, -50%);
    }
  }
  &-8 {
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

  &-girl {
    :deep(.pulse-2) {
      border-color: #dc8ec2;
    }
  }
  &-boy {
    :deep(.pulse-2) {
      border-color: #78ade0;
    }
  }
}
</style>
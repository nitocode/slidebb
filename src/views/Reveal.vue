<script setup>
import Pulse from './../components/Pulse.vue'
import { ref, onMounted } from 'vue'
import * as confetti from 'canvas-confetti'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const isGirl = ref(true)

const basedColors = [
  { colorName: "pink", colorHex: "#dc8ec2", colorsGroup: ["#78ade0", "#2d6ead"]},
  { colorName: "blue", colorHex: "#78ade0", colorsGroup: ["#dc8ec2", "#c24097"]},
  { colorName: "purple", colorHex: "#c91abe"}
]

const finalColor = basedColors.filter(elt => {
  const colorToPick = isGirl.value ? "pink": "blue"
  return elt.colorName === colorToPick
})[0]

const canvasLine = ref(null)
const isLineVisible = ref(false)

const participationCode = ref("")

const step = ref(0)
const stepData = [
  { confettiColors: null },
  { confettiColors: null },
  { confettiColors: ["#dc8ec2"] },
  { confettiColors: ["#dc8ec2", "#78ade0"] },
  { confettiColors: ["#dc8ec2"] },
  { confettiColors: ["#78ade0"] },
  { confettiColors: ["#dc8ec2", "#78ade0"] },
  { confettiColors: ["#78ade0"] },
  { confettiColors: ["#dc8ec2", "#78ade0"] },
  { confettiColors: null },
  { confettiColors: null },
]
const pulseText = ref("")
const pulseCount = ref(10)
const fireCount = ref(0)
const myConfetti = ref(null)
const vibrateDuration = 3 * 1000
let animationEnd = Date.now() + vibrateDuration
const prideDuration = 5 * 1000
let prideAnimationEnd = Date.now() + prideDuration

const downPoint = ref({x: 0, y: 0})
const upPoint = ref({x: 0, y: 0})

const waitTextForNextStep = (duration) => {
  setTimeout(() => {
    step.value++
    if (step.value > 6) {
      pulseText.value = t('reveal.pulse.tap')
    }
  }, duration);
}

const nextStepPulse = () => {
  if (step.value === 0) {
    step.value = 1
    waitTextForNextStep(6000)
  } else if (step.value > 0 && step.value <= 7) {
    firePulse()
  } else if (step.value > 7 && pulseCount.value > 0) {
    firePulse(pulseCount.value)
  }
}

const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
}

const startPulseSnow = () => {
  const pulseElt = document.querySelector(".pulse-container")
  const pulseRect = pulseElt.getBoundingClientRect()

  let centerX = pulseRect.x + pulseRect.width / 2;
  let centerY = pulseRect.y + pulseRect.height / 2;

  const timeLeft = animationEnd - Date.now();
  const ticks = Math.max(200, 500 * (timeLeft / vibrateDuration));
  myConfetti.value({
    particleCount: 1,
    startVelocity: 0,
    ticks,
    origin: { 
      x: (centerX + randomInRange(-(pulseRect.width / 2), pulseRect.width / 2)) / window.innerWidth, 
      y: (centerY + randomInRange(-(pulseRect.height / 2), pulseRect.height / 2)) / window.innerHeight 
    },
    colors: [basedColors[Math.round(randomInRange(0, 2))].colorHex],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  })

  if (timeLeft > 0) {
    requestAnimationFrame(startPulseSnow);
  }
}

const firePulse = (counter) => {
  const pulseElt = document.querySelector(".pulse-container")
  const pulseRect = pulseElt.getBoundingClientRect()

  let centerX = pulseRect.x + pulseRect.width / 2;
  let centerY = pulseRect.y + pulseRect.height / 2;
  
  myConfetti.value({
    particleCount: 50,
    startVelocity: 30,
    spread: counter != null ? 60 : 360,
    angle: counter != null ? (360 * counter / 10 + 90) : 0,
    origin: { x: centerX / window.innerWidth, y: centerY / window.innerHeight },
    colors: ["#dc8ec2", "#78ade0"]
  })

  if (step.value === 3 || step.value === 6) {
    if (fireCount.value === 1) {
      fireCount.value = 0
      step.value++
      waitTextForNextStep(2000)
    } else {
      fireCount.value++
    }
  } else if (step.value === 8) {
    pulseCount.value--
    if (pulseCount.value === 0) {
      step.value++
      animationEnd = Date.now() + vibrateDuration
      startPulseSnow()
      setTimeout(() => {
        step.value++
        finalFire()
      }, vibrateDuration)
    }
  }
}

const pageClick = (event) => {
  if (step.value >= 11) {
    myConfetti.value({
      particleCount: 50,
      startVelocity: 30,
      spread: 360,
      angle: 0,
      origin: { x: event.x / window.innerWidth, y: event.y / window.innerHeight },
      colors: finalColor.colorsGroup
    })
  }
}

const startDrawLine = (x, y) => {
  const canvasLine = document.getElementById('line');
  if (canvasLine.getContext) {
    const ctx = canvasLine.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    drawLine(ctx, [x, y], [x, y], 'white', 20);
  }
  isLineVisible.value = true
  document.getElementById("confetti").addEventListener('pointermove', movingPointer(x,y));
}

const movingPointer = (x,y) => {
  return (e) => {
    if (canvasLine.value.getContext) {
      // values between 0 and 1
      const dx = -(x / window.innerWidth - e.x / window.innerWidth)
      const dy = y / window.innerHeight - e.y / window.innerHeight
      const distance = Math.hypot(dx, dy)

      const ctx = canvasLine.value.getContext('2d');
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      drawLine(ctx, [x, y], [e.x, e.y], 'white', 20 - distance * 20);
    }
  }
}

const endDrawLine = () => {
  isLineVisible.value = false
  document.getElementById("confetti").removeEventListener('pointermove', movingPointer);
}

const finalFire = () => {
  const pulseElt = document.querySelector(".pulse-container")
  const pulseRect = pulseElt.getBoundingClientRect()

  let centerX = pulseRect.x + pulseRect.width / 2;
  let centerY = pulseRect.y + pulseRect.height / 2;

  setTimeout(() => {
    myConfetti.value({
      particleCount: 300,
      startVelocity: 40,
      spread: 360,
      angle: 0,
      origin: { x: centerX / window.innerWidth, y: centerY / window.innerHeight },
      colors: finalColor.colorsGroup
    })
    prideAnimationEnd = Date.now() + prideDuration
    setTimeout(() => {
      prideFire()
      setTimeout(() => {
        step.value++
      }, prideDuration + 500)
    }, 500)
  }, 200)
}

const prideFire = () => {

  myConfetti.value({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: finalColor.colorsGroup
  });
  myConfetti.value({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: finalColor.colorsGroup
  });

  if (Date.now() < prideAnimationEnd) {
    requestAnimationFrame(prideFire);
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

  console.log('distance:', distance)

  const firePower = distance*100
  console.log('firePower', firePower)
  
  myConfetti.value({
    particleCount: 1 + distance*100,
    startVelocity: firePower,
    spread: 55,
    angle: angle,
    origin: { x: downPoint.value.x, y: downPoint.value.y },
    colors: step.value >= 10 ? [finalColor.colorHex] : stepData[step.value].confettiColors
  })

  if (firePower > 15 && (step.value === 3 || step.value === 6)) {
    if (fireCount.value > 2) {
      fireCount.value = 0
      step.value++
      waitTextForNextStep(2000)
    } else {
      fireCount.value++
    }
  }
}

const drawLine = (ctx, begin, end, stroke = 'black', width = 1) => {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}

onMounted(() => {
  participationCode.value = window.localStorage.getItem('code')
  canvasLine.value = document.getElementById("line")

  pulseText.value = t('reveal.pulse.heartbeat')
  const confettiCanvas = document.getElementById("confetti")
  myConfetti.value = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
  });

  confettiCanvas.addEventListener('pointerdown', (event) => {
    console.log('Pointer down event', event);
    downPoint.value.x = event.x / window.innerWidth
    downPoint.value.y = event.y / window.innerHeight
    startDrawLine(event.x, event.y)
  });

  confettiCanvas.addEventListener('pointerup', (event) => {
    console.log('Pointer up event', event);
    upPoint.value.x = event.x / window.innerWidth
    upPoint.value.y = event.y / window.innerHeight
    fire()
    endDrawLine()
  });

  document.querySelector(".instruction-text").addEventListener('transitionend', () => {
    if (step.value === 2 || step.value === 5) {
      step.value++
    }
  });

  const resizeCanvas = () => {
    canvasLine.value.width = window.innerWidth;
    canvasLine.value.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas, false);
})


defineExpose({
  nextStepPulse,
  fire,
  pageClick
})
</script>

<template>
<div class="reveal-container relative h-full w-full flex justify-center items-center overflow-hidden" :class="`reveal-container-${step}`" @click="pageClick($event)">
    <!-- CONFETTI CANVAS -->
    <canvas class="absolute w-full h-full z-10" id="confetti"></canvas>
    <!-- LINE CANVAS -->
    <canvas v-show="isLineVisible && step < 11" class="absolute w-full h-full z-0" id="line"></canvas>

    <!-- PULSE -->
    <div class="pulse-container relative" :class="[{'pulse-container-aside': step > 0 && step < 8}, {'pulse-container-girl': route.params.isGirlForm != null && route.params.isGirlForm === 'true'}, {'pulse-container-boy': route.params.isGirlForm != null && route.params.isGirlForm === 'false'}, {'pulse-container-charging': step === 9}, {'pulse-container-expanding': step >= 10}, step >= 10 || isLineVisible ? 'z-0': 'z-10']">
      <Pulse @click="nextStepPulse()" :text="pulseText" />
    </div>

    <!-- TEXTS -->
    <p class="instruction-text dancing-script w-11/12 absolute top-1/2 left-1/2 opacity-0 transition-all ease-in-out z-0 text-2xl lg:text-6xl text-center" :class="[ {'opacity-100': step === 1 || step === 4 || step === 7}]">
      <span v-if="step < 3" v-html="$t('reveal.instruction')"></span>
      <span class="text-4xl lg:text-6xl" v-if="step >= 3 && step < 6">{{ $t('reveal.questionGirl') }}</span>
      <span class="text-4xl lg:text-6xl" v-if="step >= 6 && step < 9">{{ $t('reveal.questionBoy') }}</span>
    </p>
    <p class="final-text dancing-script w-11/12 absolute top-1/2 left-1/2 opacity-0 transition-all delay-200 text-3xl lg:text-6xl text-center" :class=" {'opacity-100 text-xl lg:text-6xl': step >= 10}">
      <span v-if="isGirl">
        {{ $t('reveal.babyGirl') }}<br>
        <span class="text-xl lg:text-3xl transition duration-1000 delay-200 opacity-0" :class="{'opacity-100': step < 11}">{{ $t('reveal.babyGirlSubtitle') }}</span>
      </span>
      <span v-else>
        {{ $t('reveal.babyBoy') }}<br>
        <span class="text-xl lg:text-3xl transition duration-1000 delay-200 opacity-0" :class="{'opacity-100': step < 11}">{{ $t('reveal.babyBoySubtitle') }}</span>
      </span>
    </p>
    <!-- THANKS -->
    <div class="thanks-container opacity-0 w-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all text-center flex flex-col justify-center items-center" :class="step >= 11 ? 'opacity-100 z-10' : 'z-0'">
      <img class="afc-logo mb-8" src="./../assets/afc-logo.png" alt="A french couple Logo">
      <p class="mb-4 text-lg lg:text-4xl">{{ $t('reveal.thanks.title') }}</p>
      <p class="mb-2 text-md lg-text-3xl" v-html="$t('reveal.thanks.giveCode')"></p>
      <p class="text-lg lg-text-4xl mb-8">{{ $t('reveal.thanks.myCode') }} {{ participationCode ? participationCode : 'N0CET54F'}}</p>
      <p class="mb-2 text-lg lg:text-4xl">{{ $t('reveal.thanks.support') }}</p>
      <p class="text-md lg-text-2xl">{{ $t('reveal.thanks.share') }}</p>
      <div class="my-4 flex flex-row justify-center items-center">
        <a class="instagram-link" href="https://www.instagram.com/a_french_couple/" target="_blank">
          <img src="./../assets/instagram.svg" alt="instagram logo">
        </a>
        <a class="twitter-link ml-6 mr-4" href="https://twitter.com/afrenchcouple" target="_blank">
          <img src="./../assets/twitter.svg" alt="twitter logo">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reveal-container {
  
  .instruction-text {
    transition-duration: 2s;
  }
  .final-text {
    transition-duration: 1s;
    transform: translate(-50%, -50%);
  }
  .thanks-container {
    transition-duration: 1s;
    transition-delay: 1s;
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
  &-10 {
    .final-text {
      transition-duration: 1s;
      transition-timing-function: cubic-bezier(.42,.01,.42,1.41);
    }
  }
  &-11 {
    .final-text {
      transition-timing-function: ease-in-out;
      transform: translate(-50%, calc(-45vh + 100%));
      @media screen and (max-width: 768px) {
        transform: translate(-50%, calc(-50vh + 90%));
      }
    }
  }
}
.pulse-container {
  width: 280px;
  height: 280px;
  transition: all 2s ease-in-out;
  font-family: 'Dancing Script', cursive;
  font-size: 2em;
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

  &-charging {
    width: 100px;
    height: 100px;
    animation-name: vibrate;
    animation-duration: 0.1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    :deep(.circle-content) {
      opacity: 0;
    }
  }

  &-expanding {
    transition: all 0.3s cubic-bezier(.42,-0.06,.61,-0.43);
    width: 1000px;
    height: 1000px;
    opacity: 0;
  }
}

.thanks-container {
  .twitter-link {
    width: 50px;
  }
  .instagram-link {
    width: 100px;
  }
  
  @media screen and (max-width: 400px) and (max-height: 700px) {
    transform: translateX(-50%) translateY(-45%) scale(0.8) ;
  }
}
@keyframes vibrate {
  from {transform: translateX(0px);}
  to {transform: translateX(20px);}
}
</style>
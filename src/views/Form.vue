<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Slidebb from './../components/Slidebb.vue'
import Formbb from './../components/Formbb.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const slideRef = ref(null)
const transitionDuration = ref(1000)
const formCompleted = ref(false)
const animationCompleted = ref(false)
function toggleSwitch() {
  slideRef.value.switchSide()
}
function formComplete(data) {
  console.log("data completed:", data)
  slideRef.value.setCompleted(true)

  formCompleted.value = true
  setTimeout(() => {
    console.log('ANIMATION FINIE')
    animationCompleted.value = true
    const mainElt = document.querySelector('.main-container')
    mainElt.addEventListener('transitionend', () => {
      console.log('Transition ended');
      router.push({ name: 'reveal', params: { isGirlForm: data.isGirlForm } })
    });

  }, transitionDuration.value * 2)
}
</script>
<template>
  
  <div class="main-container w-full transition-all" :class="[{'transform  scale-up': animationCompleted}, {'form-completed': formCompleted}]" :style="{transitionDuration: `${transitionDuration}ms`}">
    <Slidebb 
      class="slidebb-component"
      ref="slideRef" 
      :duration="transitionDuration"
      :breakPoint="768"
      :smoothMainContentTransition="true"
      sideTitleLeft="It's a girl" 
      sideSubtitleLeft="Oh you think it's gonna be a girl?" 
      sideTextButtonLeft="IT'S A BOY!" 
      sideTitleRight="It's a boy" 
      sideSubtitleRight="Oh you think it's gonna be a boy?" 
      sideTextButtonRight="IT'S A GIRL!"
      forwardColor="#78ade0"
      reverseColor="#dc8ec2">
      <template #mainRawContentForward>
        <Formbb :isGirlForm="false" firstLetter="L" @completed="formComplete" />
      </template>
      <template #mainRawContentReverse>
        <Formbb :isGirlForm="true" firstLetter="T" @completed="formComplete" />
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
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
  clip-path: circle(100%);
  
  transition-timing-function: cubic-bezier(.65,-0.43,.44,1);
  // transition-timing-function: ease-in-out;
  &.form-completed {
    clip-path: circle(25%);
  }
  &.scale-up {
    transform: scale(6);
  }

  .slidebb-component {
    height: 500px;
    border-radius: 15px;
    overflow: hidden;
  background-color: #333;
    @media screen and (max-width: 768px) {
      height: 100vh;
    }
  }
}
:deep(.main-content) {
  @media screen and (max-width: 370px) {
    transform: scale(0.8);
  }
}
</style>
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
  slideRef.value.setCompleted(true)

  formCompleted.value = true
  setTimeout(() => {
    animationCompleted.value = true
    const mainElt = document.querySelector('.main-container')
    mainElt.addEventListener('transitionend', () => {
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
      :sideTitleLeft="$t('form.slidebb.sideTitleLeft')" 
      :sideSubtitleLeft="$t('form.slidebb.sideSubtitleLeft')" 
      :sideTextButtonLeft="$t('form.slidebb.sideTextButtonLeft')" 
      :sideTitleRight="$t('form.slidebb.sideTitleRight')" 
      :sideSubtitleRight="$t('form.slidebb.sideSubtitleRight')" 
      :sideTextButtonRight="$t('form.slidebb.sideTextButtonRight')"
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
    overflow: scroll;
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
      border-radius: 0px;
      height: 100vh;
      min-height: 568px;
    }
  }
}
:deep(.main-content) {
  @media screen and (max-width: 380px) {
    transform: scale(0.8);
  }
}
:deep(.slidebb-container .side-content) {
  // box-shadow: 2px 5px 16px 0px #0B325E, 0px 6px 15px 14px rgba(0,0,0,0.35);
  box-shadow: 0px 6px 15px 14px rgba(0,0,0,0.35);
}
:deep(.slidebb-container .side-content .side-content-title h2) {
  font-family: 'Dancing Script', cursive, Verdana ;
  font-size: 2.5em;
}
</style>
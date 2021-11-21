<script setup>
import { ref } from 'vue'

const toggle = ref(false)
const activeState = ref(false)
const switchSide = () => {
  activeState.value = true
  toggle.value = !toggle.value

  setTimeout(() => {
    activeState.value = false
  }, props.duration/2)
}

defineExpose({
  switchSide
})
const props = defineProps({
  duration: Number,
  sideTitleLeft: String,
  sideSubtitleLeft: String,
  sideTextButtonLeft: String,
  sideTitleRight: String,
  sideSubtitleRight: String,
  sideTextButtonRight: String,
  forwardColor: String,
  reverseColor: String,
})
</script>

<template>
<div class="slidebb-container" :class="[toggle ? 'slidebb-forward' : 'slidebb-reverse', {'slidebb-active': activeState}]">
  <div class="side-content" :style="{transition: `left ${duration}ms ease-in-out, transform ${duration}ms ease-in-out, background ${duration}ms ease-in-out`, backgroundColor: toggle ? forwardColor : reverseColor}">
    <div class="side-content-relative">
      <!-- SIDE CONTENT LEFT -->
      <div class="side-content-title side-content-title-ghost side-content-title-left">
        <div class="side-content-title-left-text">
          <h2 v-html="sideTitleLeft"></h2>
          <p v-html="sideSubtitleLeft"></p>
        </div>
      </div>
      <div class="side-content-title side-content-title-left">
        <div class="side-content-title-left-text" :style="{transition: `transform ${duration}ms ease-in-out`}">
          <h2 v-html="sideTitleLeft"></h2>
          <p v-html="sideSubtitleLeft"></p>
        </div>
      </div>
      <!-- SIDE CONTENT RIGHT -->
      <div class="side-content-title side-content-title-right">
        <div class="side-content-title-right-text" :style="{transition: `transform ${duration}ms ease-in-out`}">
          <h2 v-html="sideTitleRight"></h2>
          <p v-html="sideSubtitleRight"></p>
        </div>
      </div>
      <!-- SIDE TEXT BUTTON -->
      <button class="side-content-text-button" @click="switchSide()">
        <span v-html="sideTextButtonLeft" class="side-content-text-button-ghost"></span>
        <span class="side-content-text-button-left" :style="{transition: `transform ${duration/2}ms ease-in-out, opacity ${duration/2}ms ease-in-out`, transitionDelay: `${toggle ? 0 : duration/2}ms`}" v-html="sideTextButtonLeft"></span>
        <span class="side-content-text-button-right" :style="{transition: `transform ${duration/2}ms ease-in-out, opacity ${duration/2}ms ease-in-out`, transitionDelay: `${toggle ? duration/2 : 0}ms`}" v-html="sideTextButtonRight"></span>
      </button>
      <slot name="sideRawContentLeft"></slot>
      <slot name="sideRawContentRight"></slot>
    </div>
  </div>
  <div class="main-content" :style="{transition: `left ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`}">
    <slot name="mainRawContent"></slot>
  </div>
</div>
</template>

<style scoped lang="scss">
.slidebb-container {
  position: relative;
  width: 100%;

  .side-content, .main-content {
    position: absolute;
  }
  &.slidebb-forward .side-content {
    left: 67.77%;
    .side-content-title-left-text {
      transform: translateX(-250%) scaleX(0.35);
    }
    .side-content-text-button-left {
      opacity: 0;
      transform: translateX(-120px) translateY(-50%);
    }
  }

  &.slidebb-forward .main-content {
    left: 0%;
  }

  &.slidebb-reverse .side-content {
    .side-content-title-right-text {
      transform: translateX(250%) scaleX(0.35);
    }
    .side-content-text-button-right {
      opacity: 0;
      transform: translateX(70px) translateY(-50%);
    }
  }

  &.slidebb-active .side-content {
    transform: scaleX(1.65);
  }
  .main-content {
    width: 67.77%;
    height: 100%;
    left: 33.33%;
    z-index: 20;
    background-color: grey;
  }

  .side-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 33.33%;
    height: 100%;
    left: 0%;
    z-index: 30;
    overflow: hidden;

    &-relative {
      position: relative;
      width: 100%;
    }

    .side-content-title {
      position: absolute;
      width: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      text-align: center;
      color: white;
      h2 {
        font-size: 1.5em;
      }

      &-ghost {
        position: relative;
        opacity: 0;
      }
      
    }
    &-text-button {
      position: relative;
      background-color: transparent;
      font-size: 0.7em;
      width: 200px;
      padding: 12px 30px;
      margin-top: 30px;
      border-radius: 9999px;
      border-color: white;
      border-style: solid;
      color: white;
      font-weight: bold;

      &-left, &-right {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
      &-ghost  {
        position: relative;
        opacity: 0;
      }
    }
  }
}
</style>

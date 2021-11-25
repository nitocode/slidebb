<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

const toggle = ref(false)
const activeState = ref(false)
const responsiveMode = ref(false)
const completed = ref(false)
const switchSide = () => {
  activeState.value = true
  toggle.value = !toggle.value

  setTimeout(() => {
    activeState.value = false
  }, props.duration/2)
}
const setCompleted = (bool) => {
  completed.value = bool
}

const onResize =() => {
  if (window.innerWidth <= props.breakPoint && !responsiveMode.value) {
    responsiveMode.value = true
  } else if (window.innerWidth > props.breakPoint && responsiveMode.value) {
    responsiveMode.value = false
  }
}
onResize()

defineExpose({
  switchSide,
  setCompleted
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
  breakPoint: Number,
  smoothMainContentTransition: Boolean
})
</script>

<template>
<div class="slidebb-container" :class="[toggle ? 'slidebb-forward' : 'slidebb-reverse', {'slidebb-active': activeState}, {'slidebb-container-responsive': responsiveMode}, {'slidebb-container-completed': completed}]">
  <div class="side-content" :style="{transition: `left ${duration}ms ease-in-out, top ${duration}ms ease-in-out, transform ${duration}ms ease-in-out, background ${duration}ms ease-in-out, width ${duration}ms ease-in-out, height ${duration}ms ease-in-out`, backgroundColor: toggle ? forwardColor : reverseColor}">
    <div class="side-content-relative" :style="{transition: `opacity ${duration/2}ms ease-in-out`, transitionDelay: `${duration}ms`}">
      <!-- SIDE CONTENT GHOST -->
      <div class="side-content-title side-content-title-ghost side-content-title-left">
        <div class="side-content-title-left-text">
          <h2 v-html="sideTitleLeft"></h2>
          <p v-html="sideSubtitleLeft"></p>
        </div>
      </div>
      <!-- SIDE CONTENT LEFT -->
      <div class="side-content-title side-content-title-left">
        <div class="side-content-title-left-text" :style="{transition: `transform ${duration}ms ease-in-out, opacity ${duration/2.5}ms ease-in-out`}">
          <h2 v-html="sideTitleLeft"></h2>
          <p v-html="sideSubtitleLeft"></p>
        </div>
      </div>
      <!-- SIDE CONTENT RIGHT -->
      <div class="side-content-title side-content-title-right">
        <div class="side-content-title-right-text" :style="{transition: `transform ${duration}ms ease-in-out, opacity ${duration/2.5}ms ease-in-out`}">
          <h2 v-html="sideTitleRight"></h2>
          <p v-html="sideSubtitleRight"></p>
        </div>
      </div>
      <!-- SIDE TEXT BUTTON -->
      <button class="side-content-text-button" @click="switchSide()" :style="{transition: `opacity ${duration/2}ms ease-in-out`}">
        <span v-html="sideTextButtonLeft" class="side-content-text-button-ghost"></span>
        <span class="side-content-text-button-left" :style="{transition: `transform ${duration/2}ms ease-in-out, opacity ${duration/2}ms ease-in-out`, transitionDelay: `${toggle ? 0 : duration/2}ms`}" v-html="sideTextButtonLeft"></span>
        <span class="side-content-text-button-right" :style="{transition: `transform ${duration/2}ms ease-in-out, opacity ${duration/2}ms ease-in-out`, transitionDelay: `${toggle ? duration/2 : 0}ms`}" v-html="sideTextButtonRight"></span>
      </button>
      <slot name="sideRawContentForward"></slot>
      <slot name="sideRawContentReverse"></slot>
    </div>
  </div>
  <div class="main-content" :style="{transition: `left ${duration}ms ease-in-out, top ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`}">
    <div :class="{'hidden-content': toggle}" :style="{transition: `opacity ${smoothMainContentTransition ? duration/2 : 0}ms ease-in-out` ,transitionDelay: `${duration/2}ms`}">
      <slot name="mainRawContentReverse"></slot>
    </div>
    <div :class="{'hidden-content': !toggle}" :style="{transition: `opacity ${smoothMainContentTransition ? duration/2 : 0}ms ease-in-out` ,transitionDelay: `${duration/2}ms`}">
      <slot name="mainRawContentForward"></slot>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
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
      padding-top: 20px;
      padding-bottom: 20px;
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
      border: 2px white solid;
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
.slidebb-container-responsive {
  .main-content {
    height: 67.77%;
    width: 100%;
    top: 33.33%;
    left: initial;
  }
  .side-content {
    height: 33.33%;
    width: 100%;
    left: initial;
    top: 0%;
    &-text-button {
      margin-top: 0;
    }
  }

  &.slidebb-active {
    .side-content {
      transform: scaleX(1) scaleY(1.65);
    }
    .side-content-title-left-text, .side-content-title-right-text {
      opacity: 0;
    }
  }

  &.slidebb-forward .side-content {
    top: 67.77%;
    left: initial;
    .side-content-title-left-text {
      transform: translateY(-400%) scaleX(1);
      opacity: 0;
    }
    .side-content-text-button-left {
      transform: translateX(-50%) translateY(-50%);
    }
  }

  &.slidebb-forward .main-content {
    top: 0%;
    left: initial;
  }

  &.slidebb-reverse .side-content {
    .side-content-title-right-text {
      transform: translateY(400%) scaleX(1);
      opacity: 0;
    }
    .side-content-text-button-right {
      transform: translateX(-50%) translateY(-50%);
    }
  }
}

.slidebb-container-completed {
  .side-content-text-button, .side-content-relative {
    opacity: 0;
  }
  &.slidebb-forward, &.slidebb-reverse {
    .side-content {
      width: 100%;
      left: 0;
    }
  }
  &.slidebb-container-responsive {
    &.slidebb-forward, &.slidebb-reverse {
      .side-content {
        height: 100%;
        top: 0;
      }
    }
  }
}

.main-content > div {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &.hidden-content {
    opacity: 0;
    z-index: 1;
  }
}
</style>

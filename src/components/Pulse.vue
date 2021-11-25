<script setup>

</script>

<template>
  <div>
    <div class="circle-container">
      <div class="pulse-1"></div>
      <div class="pulse-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .circle-container, .pulse-1, .pulse-2 {
    width: 280px;
    height: 280px;
    border: 1px solid #FFF;
    border-radius: 50%;
  }
  .pulse-1, .pulse-2 {
    position: absolute;
    top: -1px;
    left: -1px;
    animation: pulse 2s infinite;
  }
  .pulse-2 {
    animation-delay: 0.4s;
  }
  .circle-container {
    position: relative;
    cursor: pointer;
  }
  @keyframes pulse {
    from {
      transform: scale(1);
      opacity: 1;
      filter: blur(0);
    }

    to {
      transform: scale(2);
      opacity: 0;
      filter: blur(2px);
    }
  }
</style>
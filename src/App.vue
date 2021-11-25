<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Github pages SPA workaround
  let path = localStorage.getItem('path');
  if (path) {
    localStorage.removeItem('path');
    router.push(path);
  }
})
</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  max-width: 1000px;
  height: 500px;
  margin: auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 90vh;
  }

  .slidebb-component {
    height: 500px;
    border-radius: 15px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      height: 90vh;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const displayContent = ref(false)

const goToNextPage = () => {
  router.push({ name: 'form' })
}
const goToRevealPage = () => {
  router.push({ name: 'reveal' })
}

onMounted(() => {
  setTimeout(() => {
    displayContent.value = true
  }, 100)
})
</script>

<template>
  <div class="text-center mx-4">
    <img class="afc-logo mb-8 mx-auto" src="./../assets/afc-logo.png" alt="A french couple Logo">
    <h1 class="text-3xl sm:text-4xl lg:text-6xl dancing-script mb-10 opacity-0 transform transition duration-1000 font-bold" :class="[{'opacity-100 ': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']">{{$t('home.title')}}</h1>
    <p class="text-md lg:text-lg mb-2 opacity-0 transform transition duration-1000 delay-500" :class="[{'opacity-100': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']" v-html="$t('home.guess')"></p>
    <p class="text-md lg:text-lg opacity-0 transform transition duration-1000 delay-1000" :class="[{'opacity-100': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']">{{$t('home.challenge')}}</p>

    <button class="mt-10 btn btn-primary rounded-full opacity-0 transform transition duration-1000 delay-2000 block mx-auto" :class="[{'opacity-100': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']" @click="goToNextPage()">{{$t('home.cta')}}</button>
      <div class="divider w-1/2 max-w-full mx-auto">{{$t('home.or')}}</div> 
    <button class="mt-4 btn btn-primary rounded-full opacity-0 transform transition duration-1000 delay-2000 block mx-auto" :class="[{'opacity-100': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']" @click="goToRevealPage()">{{$t('home.discover')}}</button>
  </div>
</template>

<style lang="scss" scoped>
</style>
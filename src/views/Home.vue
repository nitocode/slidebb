<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const displayContent = ref(false)

const goToNextPage = () => {
  router.push({ name: 'form' })
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
    <h1 class="text-3xl lg:text-6xl dancing-script mb-10 opacity-0 transform transition duration-1000" :class="[{'opacity-100 ': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']">We're having a baby!!!</h1>
    <p class="text-md lg:text-lg mb-2 opacity-0 transform transition duration-1000 delay-500" :class="[{'opacity-100': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']">Try to guess our future baby's gender, name, size and weight to discover at least the gender<br><span class="italic text-sm lg:text-md">Expected birth date: March 12</span></p>
    <p class="text-md lg:text-lg opacity-0 transform transition duration-1000 delay-1000" :class="[{'opacity-100': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']">The closest person to the right answer may win a cool prize!</p>

    <button class="mt-10 btn btn-primary rounded-full opacity-0 transform transition duration-1000 delay-2000" :class="[{'opacity-100': displayContent}, displayContent ? 'translate-y-0' : 'translate-y-3.5']" @click="goToNextPage()">START GUESSING!</button>
  </div>
</template>

<style lang="scss" scoped>
</style>
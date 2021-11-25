<script setup>
import { ref } from 'vue'
const babyName = ref("");
const size = ref(40);
const date = ref(12);
const weight = ref(3);
const errorMessage = ref("");

const submit = () => {
  const data = {
    babyName: babyName.value,
    size: Number(size.value),
    weight: Number(weight.value),
    date: Number(date.value)
  }

  try {
    // Data validation
    if (isNaN(data.size) || isNaN(data.weight) || isNaN(data.date) || data.size < 35 || data.weight < 2 || data.date < 1 || data.size > 65 || data.weight > 5 || data.date > 31) {
      throw new Error('Invalid form');
    }

    const globalRegex = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/, 'g');

    if (!globalRegex.test(data.babyName) || data.babyName.length < 2 || data.babyName.length > 30) {
      throw new Error('Invalid form');
    }

    console.log("data:", data);

    // Go to reveal page
  } catch (error) {
    console.log(error)
    errorMessage.value = error
    setTimeout(() => {
      errorMessage.value = ""
    }, 3000);
  }
}
const props = defineProps({
  isGirlForm: Boolean,
  firstLetter: String
})
</script>

<template>
  <div class="flex flex-col">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Prénom du bébé</span>
      </label> 
      <input type="text" :placeholder="firstLetter ? `${firstLetter}...` : ''" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered" v-model="babyName">
    </div> 
    <div class="form-control">
      <label class="label">
        <span class="label-text">Taille</span>
      </label> 
      <label class="input-group input-group-md">
        <input id="size" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered input-md w-full" type="number" v-model="size" />
        <span>cm</span>
      </label>

      <input type="range" min="35" max="65" v-model="size" class="range range-info mt-2"> 
    </div> 
    <div class="form-control">
      <label class="label">
        <span class="label-text">Poids</span>
      </label> 
      <label class="input-group input-group-md">
        <input id="weight" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered input-md w-full" type="number" v-model="weight" />
        <span>kg</span>
      </label>

      <input type="range" min="2" max="5" step="0.01" v-model="weight" class="range range-info mt-2"> 
    </div> 
    <div class="form-control">
      <label class="label">
        <span class="label-text">Jour de naissance</span>
      </label> 
      <input id="day" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered input-md w-full" type="number" v-model="date" placeholder="terme prévu le 12" />

      <input type="range" min="1" max="31" v-model="date" class="range range-info mt-2"> 
    </div> 

    <button @click="submit()" :class="isGirlForm ? 'btn-secondary' : 'btn-info'" class="btn btn-outline rounded-full mt-6">VALIDER</button>
    <p class="mt-2 text-center text-xs">{{errorMessage}}</p>
  </div>
</template>


<style lang="scss" scoped>

</style>
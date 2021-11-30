<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const babyName = ref("");
const height = ref(40);
const date = ref(12);
const weight = ref(3);
const isLoading = ref(false);
const errorMessage = ref("");

const generateCode = (length) => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const parseJSON = (resp) => {
  return (resp.json ? resp.json() : resp);
}

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp) => {
    throw resp;
  });
}

const submit = () => {
  let data = {
    babyName: babyName.value,
    height: Number(height.value),
    weight: Number(weight.value),
    date: Number(date.value),
    isGirlForm: props.isGirlForm
  }

  try {
    if (!isLoading.value) {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 2000)
      // Data validation
      if (isNaN(data.height) || isNaN(data.weight) || isNaN(data.date) || data.height < 35 || data.weight < 2 || data.date < 1 || data.height > 65 || data.weight > 5 || data.date > 31) {
        throw new Error(t('form.error'));
      }

      const globalRegex = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/, 'g');

      if (!globalRegex.test(data.babyName) || data.babyName.length < 2 || data.babyName.length > 30) {
        throw new Error(t('form.error'));
      }

      // GENERATE CODE
      data.code = generateCode(8);

      window.sessionStorage.setItem("code", data.code);

      // SEND DATA
      console.log('voluntary uncaught error request done, just in case the server is in an OVH building :trollface:')
      fetch('https://strapi-g6om.onrender.com/predictions', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(checkStatus)
        .then(parseJSON);

      // Go to reveal page
      emit('completed', data);
    }
  } catch (error) {
    console.error(error)
    errorMessage.value = error
    setTimeout(() => {
      errorMessage.value = ""
    }, 3000);
  }
}
const emit = defineEmits(['completed'])
const props = defineProps({
  isGirlForm: Boolean,
  firstLetter: String
})
</script>

<template>
  <div class="flex flex-col">
    <div class="form-control">
      <label class="label">
        <span class="label-text">{{ $t('form.name')}}</span>
      </label> 
      <input type="text" :placeholder="firstLetter ? `${firstLetter}...` : ''" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered" v-model="babyName">
    </div> 
    <div class="form-control">
      <label class="label">
        <span class="label-text">{{ $t('form.height') }}</span>
      </label> 
      <label class="input-group input-group-md">
        <input id="height" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered input-md w-full" type="number" v-model="height" />
        <span>{{ $t('form.heightUnit') }}</span>
      </label>

      <input type="range" min="35" max="65" v-model="height" class="range range-info mt-2"> 
    </div> 
    <div class="form-control">
      <label class="label">
        <span class="label-text">{{ $t('form.weight') }}</span>
      </label> 
      <label class="input-group input-group-md">
        <input id="weight" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered input-md w-full" type="number" v-model="weight" />
        <span>{{ $t('form.weightUnit') }}</span>
      </label>

      <input type="range" min="2" max="5" step="0.1" v-model="weight" class="range range-info mt-2"> 
    </div> 
    <div class="form-control">
      <label class="label">
        <span class="label-text">{{ $t('form.birthDate') }}</span>
      </label> 
      <input id="day" :class="isGirlForm ? 'input-secondary' : 'input-info'" class="input input-sm input-bordered input-md w-full" type="number" v-model="date" />

      <input type="range" min="1" max="31" v-model="date" class="range range-info mt-2"> 
    </div> 

    <button @click="submit()" :class="isGirlForm ? 'btn-secondary' : 'btn-info'" class="btn btn-outline rounded-full mt-6">{{ $t('form.submit') }}</button>
    <p class="mt-2 text-center text-xs">{{errorMessage}}</p>
  </div>
</template>

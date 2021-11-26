import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"
import Form from "./views/Form.vue"
import Reveal from "./views/Reveal.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      { name: 'home', path: '/', component: Home },
      { name: 'form', path: '/form', component: Form },
      { name: 'reveal', path: '/reveal', component: Reveal },
    ],
  })
  
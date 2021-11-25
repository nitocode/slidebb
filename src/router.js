import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"
import Form from "./views/Form.vue"
import Reveal from "./views/Reveal.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/form', component: Form },
      { path: '/reveal', component: Reveal },
    ],
  })
  
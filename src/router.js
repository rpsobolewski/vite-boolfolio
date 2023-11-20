import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home.vue";
import Contacts from "./views/Contacts.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contacts", component: Contacts },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };

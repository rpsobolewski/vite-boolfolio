import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home.vue";
import Contacts from "./views/Contacts.vue";
import About from "./views/About.vue";
import ProjectDetail from "./views/ProjectDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contacts", component: Contacts },
  { path: "/about", component: About },
  {
    path: "/project/:id",
    name: "detail",
    component: ProjectDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };

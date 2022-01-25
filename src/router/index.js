import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About";
import Login from "../views/Login";
import TaskBoard from "../views/TaskBoard";

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const routes = [
  {
    path: "/",
    component: Login,
    beforeEnter(to, from, next) {
      if (cookies.get("user") !== null) {
        next("/taskboard");
      } else {
        next();
      }
    },
  },
  {
    path: "/taskboard",
    component: TaskBoard,
    beforeEnter(to, from, next) {
      next();
    },
  },
  {
    path: "/about",
    component: About,
    beforeEnter(to, from, next) {
      next();
    },
  },
  {
    path: "/:catchAll(.*)",
    component: Login,
    beforeEnter(to, from, next) {
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

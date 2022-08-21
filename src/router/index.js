import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListOne from "../views/ListOne.vue";
import TaskOne from "../views/TaskOne.vue";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/list", component: ListOne },
    { path: "/task/:id", component: TaskOne },
  ],
});

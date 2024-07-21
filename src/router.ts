import { createWebHistory, createRouter } from "vue-router";

import RecipeList from "./pages/recipe/RecipeList.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/recipes",
  },
  {
    path: "/recipes",
    component: RecipeList,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

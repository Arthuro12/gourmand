import { createWebHistory, createRouter } from "vue-router";

import RecipeSearchPage from "./pages/recipe/RecipeSearchPage.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/recipes",
  },
  {
    path: "/recipes",
    component: RecipeSearchPage,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

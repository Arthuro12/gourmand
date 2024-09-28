import { createWebHistory, createRouter } from "vue-router";
import { useStore } from "vuex";

import type { RouteLocationNormalized } from "vue-router";

import RecipeDetails from "./pages/recipe/RecipeDetails.vue";
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
  {
    path: "/recipes/:id",
    component: RecipeDetails,
    props: true,
    beforeEnter: (
      to: RouteLocationNormalized,
      _from: RouteLocationNormalized
    ) => {
      const store = useStore();
      if (!store.getters.hasRecipeWithId(to.params.id as string)) {
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
      }
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
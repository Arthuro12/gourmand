import { createWebHistory, createRouter } from "vue-router";

import type { RouteLocationNormalized } from "vue-router";
import type { Recipe } from "./recipes";

import RecipeDetails from "./pages/recipe/RecipeDetails.vue";
import RecipeSearchPage from "./pages/recipe/RecipeSearchPage.vue";
import NotFound from "./pages/NotFound.vue";

import { recipes } from "./recipes";

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
      if (!recipeFound(recipes, to.params.id as string)) {
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

function recipeFound(recipes: Recipe[], id: string): boolean {
  return recipes.find((currRecipe: Recipe) => currRecipe.id === id) != null;
}

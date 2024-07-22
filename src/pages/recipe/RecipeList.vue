<script setup lang="ts">
import GourmandButtonLink from "../../components/ui/GourmandButtonLink.vue";
import RecipeItem from "../../components/recipe/RecipeItem.vue";
import SearchRecipe from "../../components/search/recipe/SearchRecipe.vue";

import { computed, ref } from "vue";

import type { ComputedRef, Ref } from "vue";

import type { Recipe } from "../../recipe";

import { recipes } from "../../recipe";

const recipesRef: Ref<Recipe[]> = ref<Recipe[]>(recipes);
const displayedRecipes: ComputedRef<Recipe[]> = computed(
  () => recipesRef.value
);

let isValidSearchInput: boolean = false;
let validationErrorText: Ref<string> = ref("");
let searchFailText: Ref<string> = ref("");

function refreshErrorTexts(): void {
  validationErrorText.value = "";
  searchFailText.value = "";
}

function refreshRecipes(): void {
  recipesRef.value = recipes;
}

function searchRecipe(value: string): void {
  refreshErrorTexts();

  isValidSearchInput = value !== "";
  if (isValidSearchInput) {
    refreshRecipes();
    recipesRef.value = recipesRef.value.filter((currRecipe: Recipe) =>
      currRecipe.name.toLowerCase().startsWith(value.toLowerCase())
    );

    searchFailText.value =
      recipesRef.value.length === 0
        ? "Es wurden leider keine Rezepte gefunden, die dem eingegebenen Namen entsprechen."
        : "";

    return;
  }

  validationErrorText.value = "Bitte geben Sie einen gültigen Rezeptnamen ein.";
}
</script>

<template>
  <div class="flex justify-center mt-10 mb-40">
    <SearchRecipe
      :validation-error-text="validationErrorText"
      @search-recipes="searchRecipe"
    />
  </div>
  <ul>
    <li v-for="recipe in displayedRecipes">
      <GourmandButtonLink :is-router-link="true" link="#">
        <RecipeItem :recipe-name="recipe.name" :image-url="recipe.imagePath" />
      </GourmandButtonLink>
    </li>
  </ul>
  <div>
    <p class="text-center" v-if="searchFailText">
      {{ searchFailText }}
    </p>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 800px;
  margin: auto;
}
</style>

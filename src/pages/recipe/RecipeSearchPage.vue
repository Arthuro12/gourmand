<script setup lang="ts">
import GourmandButtonLink from "../../components/ui/GourmandButtonLink.vue";
import RecipeItem from "../../components/recipe/RecipeItem.vue";
import SearchRecipeForm from "../../components/search/recipe/SearchRecipeForm.vue";

import { computed, ref } from "vue";

import type { ComputedRef, Ref } from "vue";

import type { Recipe } from "../../recipes";

import { recipes } from "../../recipes";

const recipesRef: Ref<Recipe[]> = ref<Recipe[]>(recipes);
const foundReciped: ComputedRef<Recipe[]> = computed(() => recipesRef.value);

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
      currRecipe.name.toLowerCase().includes(value.toLowerCase())
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
  <div class="recipe-search-page">
    <div class="flex justify-center mt-10 mb-40">
      <SearchRecipeForm
        :validation-error-text="validationErrorText"
        @search-recipes="searchRecipe"
      />
    </div>
    <ul>
      <li v-for="recipe in foundReciped">
        <GourmandButtonLink
          class="p-0"
          :is-router-link="true"
          :link="`/recipes/${recipe.id}`"
        >
          <RecipeItem
            :recipe-name="recipe.name"
            :image-url="recipe.imagePath"
          />
        </GourmandButtonLink>
      </li>
    </ul>
    <div>
      <p class="text-center" v-if="searchFailText">
        {{ searchFailText }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.recipe-search-page {
  margin-bottom: 4.5rem;
}

ul {
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  margin: auto;
  padding: 0 5.5rem;
}

li {
  margin-right: 2.5rem;
  margin-bottom: 1rem;
}

@media (min-width: 768px) and (max-width: 992px) {
  ul {
    width: 700px;
    padding: 0 50px;
  }
}
</style>

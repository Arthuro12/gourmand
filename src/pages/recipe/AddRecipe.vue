<script setup lang="ts">
import { useStore } from "vuex";

import RecipeCreateForm from "../../components/recipe/RecipeCreateForm.vue";

import type { Recipe } from "../../types/recipes";

const store = useStore();

function submitRecipe(value: Recipe): void {
  store.dispatch("addRecipe", value);
}
</script>

<template>
  <RecipeCreateForm @add-recipe="submitRecipe" />
</template>

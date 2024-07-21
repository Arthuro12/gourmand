<script setup lang="ts">
import GourmandButtonLink from "../../components/ui/GourmandButtonLink.vue";
import RecipeItem from "../../components/recipe/RecipeItem.vue";

import { computed, ref } from "vue";

import type { ComputedRef, Ref } from "vue";

import type { Recipe } from "../../recipe";

import { recipes } from "../../recipe";

const recipesRef: Ref<Recipe[]> = ref<Recipe[]>(recipes);

const allRecipes: ComputedRef<Recipe[]> = computed(() => recipesRef.value);
</script>

<template>
  <ul>
    <li v-for="recipe in allRecipes">
      <GourmandButtonLink :is-router-link="true" link="#">
        <RecipeItem :recipe-name="recipe.name" :image-url="recipe.imagePath" />
      </GourmandButtonLink>
    </li>
  </ul>
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

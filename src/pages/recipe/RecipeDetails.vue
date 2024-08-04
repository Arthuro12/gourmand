<script setup lang="ts">
import { computed, ref } from "vue";

import type { ComputedRef, Ref } from "vue";

import type { Recipe } from "../../recipes";

import { recipes } from "../../recipes.js";

const props = defineProps<{
  id: string;
}>();

const recipesRef: Ref<Recipe[]> = ref(recipes);

const selectedRecipe: ComputedRef<Recipe | undefined> = computed(() =>
  recipesRef.value.find((currentRecipe) => currentRecipe.id === props.id)
);
const recipeName: ComputedRef<string | undefined> = computed(
  () => selectedRecipe.value?.name
);
const imageUrl: ComputedRef<string | undefined> = computed(
  () => selectedRecipe.value?.imagePath
);
const ingredients: ComputedRef<string[] | undefined> = computed(
  () => selectedRecipe.value?.ingredients
);
const preparationSteps: ComputedRef<string[] | undefined> = computed(
  () => selectedRecipe.value?.preparationSteps
);
</script>

<template>
  <div class="recipe-page">
    <div class="recipe-page__header">
      <h3>{{ recipeName }}</h3>
      <img class="recipe-image" :src="imageUrl" alt="" />
    </div>
    <div class="recipe-page__body">
      <div>
        <h3>Zutaten</h3>
        <ul>
          <li v-for="ingredient in ingredients">{{ ingredient }}</li>
        </ul>
      </div>
      <div>
        <h3>Zubereitung</h3>
        <p v-for="step in preparationSteps">{{ step.trim() }}</p>
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-page {
  width: 900px;
  margin: auto;
}

.recipe-image {
  width: 500px;
  height: 400px;
  border-radius: 20px;
}
</style>

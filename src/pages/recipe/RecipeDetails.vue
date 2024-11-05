<script setup lang="ts">
import { computed, ref } from "vue";
import type { ComputedRef, Ref } from "vue";
import { useStore } from "vuex";

import fallbackImage from "../../assets/images/lasagne.jpg";

import type { Recipe } from "../../types/recipes";

const props = defineProps<{
  id: string;
}>();

const store = useStore();

const recipesRef: Ref<Recipe[]> = ref(store.state.recipes);

const selectedRecipe: ComputedRef<Recipe | null> = computed(
  () =>
    recipesRef.value.find((currentRecipe) => currentRecipe.id === props.id) ??
    null
);

const recipeName: ComputedRef<string> = computed(
  () => selectedRecipe.value?.name ?? ""
);

const imageUrl: ComputedRef<string> = computed(
  () => selectedRecipe.value?.imagePath ?? ""
);

const ingredients: ComputedRef<string[]> = computed(
  () => selectedRecipe.value?.ingredients ?? []
);

const preparationSteps: ComputedRef<string[]> = computed(
  () => selectedRecipe.value?.preparationSteps ?? []
);
</script>

<template>
  <div class="recipe-page">
    <div class="recipe-page__header">
      <h3>{{ recipeName }}</h3>
      <picture>
        <source :src="imageUrl" />
        <img class="recipe-image" :src="fallbackImage" alt="" />
      </picture>
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

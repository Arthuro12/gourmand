<script setup lang="ts">
import GourmandButtonLink from "../ui/GourmandButtonLink.vue";
import GourmandCard from "../ui/GourmandCard.vue";

import { computed, ref } from "vue";

import type { ComputedRef, Ref } from "vue";

import type { Recipe } from "../recipe";

import { recipes } from "../recipe";

const recipesRef: Ref<Recipe[]> = ref<Recipe[]>(recipes);

const allRecipes: ComputedRef<Recipe[]> = computed(() => recipesRef.value);
</script>

<template>
  <ul>
    <GourmandButtonLink
      :is-router-link="true"
      link="#"
      v-for="recipe in allRecipes"
    >
      <div class="recipe-card">
        <GourmandCard>
          <template #cardHeader>
            <img class="recipe-card__image" :src="recipe.imagePath" />
          </template>
          <template #cardBody>
            <div class="recipe-card__title-wrapper">
              <h3 class="recipe-card__title">{{ recipe.name }}</h3>
            </div>
          </template>
        </GourmandCard>
      </div>
    </GourmandButtonLink>
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

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref, provide, onMounted, onBeforeUnmount } from "vue";
import type { ComputedRef, Ref } from "vue";

import GourmandButtonLink from "../../components/ui/GourmandButtonLink.vue";
import RecipeItem from "../../components/recipe/RecipeItem.vue";
import SearchRecipeForm from "../../components/search/recipe/SearchRecipeForm.vue";

import EventBus from "../../event-bus";
import type { Recipe } from "../../types/recipes";

const store = useStore();

const searchInput: Ref<string> = ref("");

const foundRecipes: ComputedRef<Recipe[]> = computed(() => store.getters.foundRecipes(searchInput.value));

let isValidSearchInput: boolean = false;
let validationErrorText: Ref<string> = ref("");
let searchFailText: Ref<string> = ref("");

function refreshErrorTexts(): void {
  validationErrorText.value = "";
  searchFailText.value = "";
}

const searchRecipe = async (value: string) => {
  refreshErrorTexts();

  isValidSearchInput = value !== "";

  if (!isValidSearchInput) {
    validationErrorText.value = "Bitte geben Sie einen gültigen Rezeptnamen ein.";
    return;
  }
  
  searchInput.value = value;

  searchFailText.value =
      foundRecipes.value.length === 0
        ? "Es wurden leider keine Rezepte gefunden, die dem eingegebenen Namen entsprechen."
        : "";
};

provide("errorText", validationErrorText);

onMounted(() => {
  store.dispatch("loadRecipes");
  //@ts-ignore
  EventBus.on("search", searchRecipe);
});

onBeforeUnmount(() => {
  //@ts-ignore
  EventBus.off("search", searchRecipe);
});

// async function fetchData() {
//   const data = await fetch("https://gourmand-f4950-default-rtdb.firebaseio.com/recipes.json");
//   console.log(data.json());
// }

// fetchData();
</script>

<template>
  <div class="recipe-search-page">
    <div class="flex justify-center mt-10 mb-40">
      <SearchRecipeForm />
    </div>
    <ul>
      <li v-for="recipe in foundRecipes">
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
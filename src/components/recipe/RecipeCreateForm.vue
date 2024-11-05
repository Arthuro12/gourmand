<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import GourmandButton from "../ui/GourmandButton.vue";

import type { Recipe } from "../../types/recipes";

const emit = defineEmits<{
  (e: "add-recipe", value: Recipe): void;
}>();

// const recipeState = {
//   name: ref(""),
//   description: ref(""),
//   ingredients: ref([]),
//   steps: ref([]),
// };

const name: Ref<string> = ref("");
const description: Ref<string> = ref("");
const ingredient: Ref<string> = ref("");
const ingredients: Ref<string[]> = ref([] as string[]);
const step: Ref<string> = ref("");
const steps: Ref<string[]> = ref([] as string[]);

function onUpdateIngredients(): void {
  if (ingredient.value !== "") {
    ingredients.value.push(ingredient.value);
    ingredient.value = "";
  }
}

function onUpdateSteps(): void {
  if (step.value !== "") {
    steps.value.push(step.value);
    step.value = "";
  }
}

function onSaveRecipe(): void {
  const recipe: Recipe = {
    name: name.value,
    imagePath: "",
    description: description.value,
    ingredients: ingredients.value,
    preparationSteps: steps.value,
  };

  emit("add-recipe", recipe);
}
</script>

<template>
  <div>
    <div>Neues Rezept erstellen</div>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" id="recipe-name" v-model.trim="name" />
      </div>
      <div>
        <label>Beschreibung:</label>
        <textarea id="description" v-model.trim="description"></textarea>
      </div>
      <div>
        <div>
          <label>Zutatten:</label>
          <input type="text" id="ingredients" v-model.trim="ingredient" />
        </div>
        <GourmandButton
          type="button"
          button-text="hinzufügen"
          @click="onUpdateIngredients"
        />
      </div>
      <div>
        <div>
          <label>Zubereitungsschritt:</label>
          <input type="text" id="preparation-steps" v-model.trim="step" />
        </div>
        <GourmandButton
          type="button"
          button-text="hinzufügen"
          @click="onUpdateSteps"
        />
      </div>
      <div>
        <GourmandButton
          type="button"
          button-text="Rezept speichern"
          @click="onSaveRecipe"
        />
      </div>
    </form>
  </div>
</template>

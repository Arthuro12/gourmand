<script setup lang="ts">
import SearchInput from "../../ui/inputs/GourmandSearchInput.vue";

defineProps<{
  validationErrorText: string;
}>();

const emit = defineEmits<{
  (event: "search-recipes", value: string): void;
}>();

function triggerRecipeSearch(value: string): void {
  emit("search-recipes", value);
}
</script>

<template>
  <SearchInput
    placeholder="Beginnen Sie Ihre Suche..."
    :validation-error-text="validationErrorText"
    @search="triggerRecipeSearch"
  />
</template>

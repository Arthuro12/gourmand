<script setup lang="ts">
import { ref } from "vue";

import type { Ref } from "vue";

import SearchInput from "../../ui/inputs/GourmandSearchInput.vue";

const emit = defineEmits<{
  (event: "search-recipes", value: string): void;
}>();

const searchText: Ref<string> = ref("");

function triggerRecipeSearch(value: string): void {
  emit("search-recipes", value);
}
</script>

<template>
  <SearchInput
    v-model="searchText"
    placeholder="Beginnen Sie Ihre Suche..."
    @search="triggerRecipeSearch"
  />
</template>

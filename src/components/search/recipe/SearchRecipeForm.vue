<script setup lang="ts">
import SearchInput from "../../ui/inputs/GourmandSearchInput.vue";

import { ref } from "vue";
import type { Ref } from "vue";

const searchText: Ref<string> = ref("");
</script>

<template>
  <SearchInput v-model="searchText" placeholder="Beginnen Sie Ihre Suche..." />
</template>
<script setup lang="ts">
import { inject, ref } from "vue";

import type { Ref } from "vue";

import GourmandButton from "../GourmandButton.vue";

defineProps<{
  placeholder: string;
}>();

const validationErrorText: string = inject("errorText", "");

const emit = defineEmits<{
  (event: "search", value: string): void;
}>();

const enteredText: Ref<string> = ref("");

function triggerSearch(value: string): void {
  emit("search", value);
}
</script>

<template>
  <form class="search-input">
    <div
      class="search-input__input-wrapper"
      :class="{
        'highlight--red': validationErrorText && validationErrorText !== '',
      }"
    >
      <input
        type="text"
        :placeholder="placeholder"
        v-model.trim="enteredText"
      />
      <GourmandButton
        type="button"
        button-text="Rezepte finden"
        @click="triggerSearch(enteredText)"
      />
    </div>
    <p
      class="invalid-input"
      v-if="validationErrorText && validationErrorText !== ''"
    >
      {{ validationErrorText }}
    </p>
  </form>
</template>

<style scoped>
.search-input__input-wrapper {
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  padding: 10px 0 10px 0;
  width: 450px;
}

input {
  font: inherit;
  border: none;
  padding-left: 10px;
  margin-left: 7px;
  width: 65%;
}

input:focus {
  outline: none;
}

:deep(button) {
  margin-left: 4px;
}

.invalid-input {
  text-align: center;
  color: red;
}

.highlight--red {
  border: none;
  outline: 2px solid red;
}
</style>

<script setup lang="ts">
import { computed, inject, ref, toRef } from "vue";

import type { Ref } from "vue";

import GourmandButton from "../GourmandButton.vue";

const props = defineProps<{
  modelValue: string;
  placeholder: string;
  validationErrorText?: string;
}>();
const errorTextRef = toRef(props.validationErrorText);

const validationErrorText: Ref<string> =
  inject("errorText", ref("")) || errorTextRef || ref("");

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
  (event: "search", value: string): void;
}>();

const inputText = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

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
      <input type="text" :placeholder="placeholder" v-model.trim="inputText" />
      <GourmandButton
        type="button"
        button-text="Rezepte finden"
        @click="triggerSearch(inputText)"
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

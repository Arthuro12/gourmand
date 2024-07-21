<script setup lang="ts">
import GourmandButton from "../GourmandButton.vue";

defineProps<{
  placeholder: string;
  inputOptions?: {
    heigth?: string;
    width?: string;
  };
}>();
</script>

<template>
  <form class="search-input">
    <div class="search-input__input-wrapper">
      <input type="text" :placeholder="placeholder" />
      <GourmandButton type="submit" button-text="Rezept finden" />
    </div>
  </form>
</template>

<style scoped>
.search-input__input-wrapper {
  display: flex;
  justify-content: space-between;
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
}

input:focus {
  outline: none;
}

:deep(button) {
  margin-right: 7px;
}
</style>

<script setup lang="ts">
defineProps<{
  type: "button" | "submit" | "reset";
  buttonText: string;
}>();
</script>

<template>
  <button :type="type">{{ buttonText }}</button>
</template>

<style scoped>
button {
  font: inherit;
  background-color: rgb(206, 106, 106);
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
}
</style>

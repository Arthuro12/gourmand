<script setup lang="ts">
defineProps<{
  type: "button" | "submit" | "reset";
  buttonText: string;
}>();
</script>

<template>
  <button :type="type">{{ buttonText }}</button>
</template>

<style scoped></style>

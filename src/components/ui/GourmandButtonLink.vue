<script setup lang="ts">
defineProps<{
  buttonText: string;
  link: string;
}>();
</script>

<template>
  <a :href="link">
    {{ buttonText }}
  </a>
</template>

<style scoped>
a {
  background-color: rgb(206, 106, 106);
  padding: 10px 15px;
  border-radius: 20px;
}
</style>

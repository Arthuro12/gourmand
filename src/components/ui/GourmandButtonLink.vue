<script setup lang="ts">
defineProps<{
  isRouterLink: boolean;
  link: string;
  buttonText?: string;
}>();
</script>

<template>
  <a v-if="!isRouterLink" :href="link">
    <span v-if="buttonText">{{ buttonText }}</span>
  </a>
  <RouterLink class="button-link" v-else :to="link">
    <slot></slot>
  </RouterLink>
</template>

<style scoped></style>

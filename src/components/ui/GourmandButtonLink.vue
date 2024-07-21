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
  <RouterLink class="button-router" v-else :to="link">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
a {
  background-color: rgb(206, 106, 106);
  padding: 10px 15px;
  border-radius: 20px;
}

.button-router {
  background: none;
}
</style>

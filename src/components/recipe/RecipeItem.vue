<script setup lang="ts">
import GourmandCard from "..//ui/GourmandCard.vue";
defineProps<{
  recipeName: string;
  imageUrl?: string;
}>();
</script>

<template>
  <div class="recipe-card">
    <GourmandCard>
      <template #cardHeader>
        <img class="recipe-card__image" :src="imageUrl" alt="" />
      </template>
      <template #cardBody>
        <div class="recipe-card__title-wrapper">
          <h3 class="recipe-card__title">{{ recipeName }}</h3>
        </div>
      </template>
    </GourmandCard>
  </div>
</template>

<style scoped>
@media (min-width: 768px) and (max-width: 992px) {
  .recipe-card__title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
}
</style>

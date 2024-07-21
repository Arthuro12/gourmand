<script setup lang="ts">
import GourmandHeader from "./components/layouts/GourmandHeader.vue";
import GourmandFooter from "./components/layouts/GourmandFooter.vue";
import RecipeList from "./pages/recipe/RecipeList.vue";
import SearchRecipe from "./components/search/recipe/SearchRecipe.vue";
</script>

<template>
  <GourmandHeader />
  <main>
    <div class="flex justify-center mt-10 mb-40">
      <SearchRecipe />
    </div>
    <RecipeList />
  </main>
  <GourmandFooter />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}
</style>

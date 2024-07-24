<template>
  <div class="page-not-found">
    <h2 class="page-not-found__header-text">
      Die angefordete Seite existiert leider nicht.
    </h2>
    <p class="page-not-found__description">
      Schauen Sie sich<RouterLink class="button-link" to="/recipes"
        >hier die Liste unserer Rezepte</RouterLink
      >an.
    </p>
  </div>
</template>

<style scoped>
.page-not-found {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
}

.page-not-found__header-text {
  text-align: center;
}

a {
  color: rgb(206, 106, 106);
}
</style>

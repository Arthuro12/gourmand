<template>
  <div class="">
    <p>
      Die angefordete Seite existiert leider nicht. Schauen Sie die Liste unsere
      Rezepte <RouterLink to="/recipes">hier</RouterLink> Oder verwenden Sie das
      Suchfeld, um nach Rezepten zu suchen.
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}

a {
  color: rgb(206, 106, 106);
}
</style>

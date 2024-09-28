<script setup lang="ts">
import GourmandButtonLink from "../ui/GourmandButtonLink.vue";
</script>

<template>
  <header>
    <div class="page-header__row">
      <div class="page-logo-wrapper">
        <div>
          <a class="page-logo button-link" href="/">Gourmand</a>
        </div>
      </div>
      <nav class="page-header__nav">
        <ul class="page-header__nav-items">
          <li>
            <GourmandButtonLink
              class="button-link"
              :is-router-link="false"
              link="/recipes"
              button-text="Alle Rezepte"
            />
          </li>
          <li><a class="button-link" href="#">Kategorien</a></li>
          <li>
            <GourmandButtonLink
              :is-router-link="false"
              button-text="Anmelden"
              link="#"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.page-header__row {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
}

.page-logo-wrapper {
  padding-top: 0.5rem;
}

.page-logo {
  color: rgb(206, 106, 106);
  font-size: 26px;
  font-weight: bold;
}

.page-header__nav {
  width: 400px;
}

.page-header__nav-items {
  display: flex;
  justify-content: space-between;
}
</style>
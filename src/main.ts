import "./assets/css/tailwind-like.css";
import "./assets/css/buttons.css";
import "./assets/css/card.css";

import { createApp } from "vue";

import App from "./App.vue";

import { store } from "./store.js";
import { router } from "./router.js";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");

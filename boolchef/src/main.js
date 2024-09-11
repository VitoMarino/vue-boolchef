import "./assets/Style/general.scss";
import Popper from "vue3-popper";
import { createApp } from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { router } from "./router";

const app = createApp(App);
// app.mount("#app");
app.component("Popper", Popper);
//* Devo scrivere anche qui use(router), per ricordare all'applicazione di usare router.
createApp(App).use(router).mount("#app");

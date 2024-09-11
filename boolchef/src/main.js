import "./assets/Style/general.scss";

import { createApp } from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { router } from './router';

const app = createApp(App);
// app.mount("#app");

//* Devo scrivere anche qui use(router), per ricordare all'applicazione di usare router.
createApp(App).use(router).mount('#app');

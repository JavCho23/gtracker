import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/arya-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.mount("#app");

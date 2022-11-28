import { createApp } from "vue";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";

import "./assets/main.css";

const app = createApp(App);
app.use(VueClickAway);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import CodeIcon from "./components/icons/CodeIcon.vue";
import DiscordIcon from "./components/icons/DiscordIcon.vue";
import EmailIcon from "./components/icons/EmailIcon.vue";
import GithubIcon from "./components/icons/GithubIcon.vue";
import LinkedInIcon from "./components/icons/LinkedInIcon.vue";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import "./assets/main.css";

const app = createApp(App);
app.use(VueClickAway);
app.use(Vue3Lottie, { name: "LottieAnimation" });

app
  .component("CodeIcon", CodeIcon)
  .component("DiscordIcon", DiscordIcon)
  .component("EmailIcon", EmailIcon)
  .component("GithubIcon", GithubIcon)
  .component("LinkedInIcon", LinkedInIcon);

app.mount("#app");

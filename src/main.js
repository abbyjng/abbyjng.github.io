import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import CodeIcon from "./components/svgs/CodeIcon.vue";
import DiscordIcon from "./components/svgs/DiscordIcon.vue";
import EmailIcon from "./components/svgs/EmailIcon.vue";
import GithubIcon from "./components/svgs/GithubIcon.vue";
import LinkedInIcon from "./components/svgs/LinkedInIcon.vue";
import LinkIcon from "./components/svgs/LinkIcon.vue";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import "./assets/base.css";

const app = createApp(App);
app.use(VueClickAway);
app.use(Vue3Lottie, { name: "LottieAnimation" });

app
  .component("CodeIcon", CodeIcon)
  .component("DiscordIcon", DiscordIcon)
  .component("EmailIcon", EmailIcon)
  .component("GithubIcon", GithubIcon)
  .component("LinkedInIcon", LinkedInIcon)
  .component("LinkIcon", LinkIcon);

app.mount("#app");

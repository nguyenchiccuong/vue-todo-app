import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import createStore from "./store";
import VueCookies from 'vue3-cookies'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.use(router).use(createStore).use(VueCookies)

app.mount("#app");

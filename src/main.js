import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";
import "./assets/Scss/main.scss";

createApp(App).use(store).use(router).mount("#app");

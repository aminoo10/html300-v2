import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
// import BootstrapVue from "bootstrap-vue";
import "./main.scss";

// Vue.use(BootstrapVue);

createApp(App)
  .use(router)
  .mount("#app");

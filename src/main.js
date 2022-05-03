import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "moment";

// import css global
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponents } from "@/utils/import";
import { projectAuth } from "@/configs/firebase";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    registerGlobalComponents(app);

    app.config.globalProperties.$moment = moment;

    app.use(router);

    app.mount("#app");
  }
});

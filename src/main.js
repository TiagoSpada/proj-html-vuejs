import { createApp } from "vue";
// import
import "./assets/scss/main.scss";
//  import vue component
import App from "./App.vue";

import { router } from "./router.js";

createApp(App).use(router).mount("#app");

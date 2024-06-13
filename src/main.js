import { createApp } from "vue";
// import
import "./assets/scss/main.scss";
//  import vue component
import App from "./App.vue";

import { router } from "./router.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add([faPhoneFlip, faClock]);

createApp(App)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
// import
import "./assets/scss/main.scss";
//  import vue component
import App from "./App.vue";

import { router } from "./router.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font catamaran*/
import "@fontsource/catamaran"; // Defaults to weight 400

/* import font vidaloka*/
import "@fontsource/vidaloka"; // Defaults to weight 400

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add([
	faLocationDot,
	faPhoneFlip,
	faClock,
	faEnvelope,
	faFacebookF,
	faInstagram,
	faXTwitter,
	faYoutube,
]);

createApp(App)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
// createApp(App).use(router).mount("#app");

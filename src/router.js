import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContact from "./pages/AppContact.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: AppHome,
		},
		{
			path: "/about-us",
			name: "about",
			component: AppAbout,
		},
		{
			path: "/constact-us",
			name: "contact",
			component: AppContact,
		},
	],
});
export { router };

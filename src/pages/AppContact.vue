<script>
import FooterApp from "../components/FooterApp.vue";
import InfoOffice from "../components/contact_components/InfoOffice.vue";
import MapComponent from "../components/contact_components/MapComponent.vue";
import InputComponent from "../components/contact_components/InputComponent.vue";
export default {
	name: "contact",
	components: {
		FooterApp,
		InfoOffice,
		MapComponent,
		InputComponent,
	},
};
</script>

<template>
	<main>
		<div class="container-fluid img-background">
			<div class="d-flex">
				<div class="content">
					<h2>Contact Us</h2>
					<p>
						Nunc rutrum a nibh id ornare. Vivamus eleifend ultricies elit quis
						imperdiet.
					</p>
				</div>
			</div>
		</div>
		<div class="contact">
			<div class="container-lg">
				<div class="row justify-content-center">
					<InfoOffice />
					<InputComponent />
				</div>
			</div>
		</div>
		<MapComponent />
	</main>
	<!-- <FooterApp /> -->
</template>

<style scoped lang="scss">
.img-background {
	background-color: #67615a;
	background-image: url(https://avada.website/food/wp-content/uploads/sites/118/2019/03/page-title-bar-bg-1.png);
	height: 460px;
	background-size: cover;
	.d-flex {
		height: 100%;
		.content {
			text-align: center;
			color: white;
			margin: auto;
			h2 {
				font-size: 42px;
				line-height: 1.4;
			}
			p {
				font-size: 16px;
			}
		}
	}
}

.contact {
	padding-bottom: 150px;
	.container-lg {
		max-width: 1248px;
	}
}
</style>

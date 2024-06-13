<script>
import FooterApp from "../components/FooterApp.vue";
import InfoOffice from "../components/contact_components/InfoOffice.vue";
export default {
	name: "contact",
	components: {
		FooterApp,
		InfoOffice,
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
					<div class="col-12 col-lg-6 contact-input">
						<div class="content"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3026.854573624512!2d-73.946785!3d40.655136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b6617a81121%3A0x9d5cc54407bdb5fa!2s775%20New%20York%20Ave%2C%20Brooklyn%2C%20NY%2011203!5e0!3m2!1sen!2sus!4v1718106532628!5m2!1sen!2sus"
				width="100%"
				height="100%"
				style="border: 0"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
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

		.contact-input {
			padding: 0 20px;
			.content {
				background-color: lightskyblue;
				padding-top: 60px;
				height: 800px;
			}
		}
	}
}

.map {
	margin-bottom: 10px;
	width: 100vw;
	height: 500px;
}
</style>

<script>
import FooterApp from "../components/FooterApp.vue";

export default {
	name: "contact",
	components: {
		FooterApp,
	},
};
</script>

<template>
	<main>
		<div class="container-fluid img-background">
			<div class="d-flex">
				<div class="content">Contact Us</div>
			</div>
		</div>
		<div class="contact">
			<div class="container-lg">
				<div class="row justify-content-center">
					<div class="col-12 col-lg-6 contact-info">
						<div class="content">
							<div class="row flex-column justify-content-between">
								<div class="col info">
									<div class="content-info">Main Office</div>
								</div>
								<div class="col info">
									<div class="content-info">Quick Contact</div>
								</div>
								<div class="col info">
									<div class="content-info">Office Hours</div>
								</div>
								<div class="col info"></div>
							</div>
						</div>
					</div>
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
			color: white;
			margin: auto;
		}
	}
}

.contact {
	padding-bottom: 150px;
	.container-lg {
		max-width: 1248px;
		.contact-info {
			position: relative;
			top: -75px;
			padding: 0 20px;
			.content {
				background-color: lightsalmon;
				height: 800px;
				padding: 80px 60px;
				.row {
					.info {
						background-color: #fff;
						margin-top: 20px;
						.content-info {
							padding: 35px 20px;
						}
					}
					.info:first-child {
						margin-top: 0;
					}
					.info:last-child {
						padding: 10px;
						background-color: #fff;
					}
				}
			}
		}
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
	margin-bottom: 15px;
	width: 100vw;
	height: 500px;
}
</style>

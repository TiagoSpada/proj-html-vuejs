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
		<h1>Pagina Contatti</h1>
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
	.container-lg {
		max-width: 1248px;
		.contact-info {
			position: relative;
			top: -75px;
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
			.content {
				background-color: lightskyblue;
				padding-top: 60px;
				height: 800px;
			}
		}
	}
}
</style>

<script>
export default {
	name: "FooterInfo",
};
</script>

<template>
	<div class="footer-info">
		<div class="container">
			<div class="row">
				<div class="col-3">
					<div class="content">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/avada-food-logo-mob-2x.png"
							alt="AVADA FOOD"
							class="img-logo"
						/>
					</div>
				</div>
				<div class="col-3">
					<div class="content">
						<nav>
							<ul class="row flex-column justify-between">
								<li class="col"><div>Recipes</div></li>
								<li class="col"><div>Places</div></li>
								<li class="col"><div>Blog</div></li>
								<li class="col"><div>About</div></li>
								<li class="col"><div>Contact</div></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="col-3">
					<div class="content contact">
						<h4>CONTACT US</h4>
						<ul class="ps-0">
							<li>
								<span
									><font-awesome-icon
										:icon="['fas', 'location-dot']"
										class="icon"
								/></span>
								12345 Avada Main Street, New York, NY 555555
								<div></div>
							</li>
							<li>
								<div>
									<font-awesome-icon
										:icon="['fas', 'phone-flip']"
										class="icon"
									/>
								</div>
								&plus;0100-505-0000
								<div></div>
							</li>
							<li>
								<div class="icon">
									<font-awesome-icon :icon="['fas', 'envelope']" />
								</div>
								<div>info@avada-domain.com</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-3">
					<div class="content app">
						<h4>GET OUR APP</h4>
						<div>
							<img
								src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/download-android-200x66.png"
								alt="Google Play"
							/>
						</div>
						<div>
							<img
								src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/download-app-store-200x66.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
@use "../../assets/scss/partials/variables" as *;
.footer-info {
	padding: 52px 0;
	.container {
		max-width: 1248px;
		.row > * {
			padding: auto0;
		}
		.content {
			color: #6b6963;
			height: 100%;
			.img-logo {
				margin: 10px 0;
				max-width: 192px;
			}
			nav {
				height: 100%;
				ul {
					height: 100%;
					justify-content: space-between;
					font-size: 16px;
					padding-left: 0;
					li {
						div {
							margin-bottom: 16px;
						}
						div:hover {
							cursor: pointer;
							color: $main-orange;
							border-right: 2px solid $main-orange;
							transition: 100ms;
						}
					}
				}
			}
			h4 {
				font-size: 16px;
				font-weight: 600;
				color: $main-orange;
				letter-spacing: 2px;
			}
		}
		.contact {
			li {
				display: flex;
				padding: 16px 0;
				border-bottom: 1px solid #ebebe1;
				font-size: 17px;
				.icon {
					color: $main-orange;
					margin-right: 20px;
				}
			}
		}
		.app {
			h4 {
				margin-bottom: 24px;
			}
			div {
				margin: 16px 0;
				img {
					cursor: pointer;
				}
			}
		}
	}
}
</style>

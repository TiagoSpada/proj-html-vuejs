<script>
export default {
	name: "InfoOffice",
};
</script>
<template>
	<div class="col-12 col-lg-6 contact-info">
		<div class="content">
			<div class="row flex-column">
				<div class="col info">
					<div class="content-info">
						<div class="row">
							<div class="col-3">
								<div class="icon-container">
									<font-awesome-icon
										:icon="['fas', 'location-dot']"
										class="m-auto"
									/>
								</div>
							</div>
							<div class="col-7">
								<h5>MAIN OFFICE</h5>
								<div>12345 Avada Main Street, New York, NY 555555</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col info">
					<div class="content-info">
						<div class="row">
							<div class="col-3">
								<div class="icon-container">
									<font-awesome-icon
										:icon="['fas', 'phone-flip']"
										class="m-auto"
									/>
								</div>
							</div>
							<div class="col-7">
								<h5>QUICK CONTACT</h5>
								<div>&plus; 0100-505-0000</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col info">
					<div class="content-info">
						<div class="row">
							<div class="col-3">
								<div class="icon-container">
									<font-awesome-icon :icon="['fas', 'clock']" class="m-auto" />
								</div>
							</div>
							<div class="col-7">
								<h5>OFFICE HOURS</h5>
								<div>9AM – 5PM (Monday – Friday)</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col info"></div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/partials/variables" as *;

.contact-info {
	position: relative;
	top: -75px;
	padding: 0 30px;
	.content {
		background-image: url("https://avada.website/food/wp-content/uploads/sites/118/2019/03/brooke-lark-186926-unsplash-1.jpg");
		background-size: cover;
		background-position: center;
		padding: 80px 60px;
		.row {
			.info {
				background-color: #fff;
				margin-top: 20px;
				margin-bottom: 35px;
				.content-info {
					padding: 35px 20px;

					.icon-container {
						height: 74px;
						width: 74px;
						display: flex;
						font-size: 35px;
						color: $main-orange;
						border: 2px solid $main-orange;
						border-radius: 50%;
					}
					.icon-container:hover {
						background-color: #333338;
						transition: 600ms;
					}
					.col-7 {
						margin-bottom: 20px;
						h5 {
							font-size: 18px;
							letter-spacing: 2px;
							margin-bottom: 15px;
						}
						div {
							color: #858695;
							font-size: 17px;
						}
					}
				}
			}
			.info:first-child {
				margin-top: 0;
			}
			.info:last-child {
				padding: 25px;
				background-color: #fff;
			}
		}
	}
}
</style>

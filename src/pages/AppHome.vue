<script>
import FooterApp from "../components/FooterApp.vue";
import JumboComponent from "../components/home_components/JumboComponent.vue";
import SubJumboComponent from "../components/home_components/SubJumboComponent.vue";
import RecepisComponent from "../components/home_components/RecipeComponent.vue";
import CollectionComponent from "../components/home_components/CollectionComponent.vue";
import SubscribeComponent from "../components/home_components/SubscribeComponent.vue";

export default {
	name: "home",
	components: {
		FooterApp,
		JumboComponent,
		SubJumboComponent,
		RecepisComponent,
		CollectionComponent,
		SubscribeComponent,
	},
};
</script>

<template>
	<JumboComponent />
	<SubJumboComponent />
	<RecepisComponent />
	<CollectionComponent />
	<!-- FARM SECTION -->
	<div class="farm">
		<div class="container-xl content-wrapper">
			<div class="row">
				<div class="col-md-8">
					<h2>Farm to Table</h2>
					<p>
						Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
						Suspendisse maximus lacus non nunc lacinia lobortis.
					</p>
					<div class="card mb-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/single-post-img3.jpg"
							class="card-img-top"
							alt="Sushi Image"
						/>
						<div class="card-body">
							<h5 class="card-title">
								Food Corner: Top Japanese Restaurants for Sushi
							</h5>
							<p class="card-text">
								Suspendisse at semper odio. Nam fringilla scelerisque tincidunt.
								Orci varius natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Donec tincidunt posuere ornare.
								Phasellus placerat odio non feugiat sollicitudin.
							</p>
							<a href="#" class="btn-r btn-primary">Read more</a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 mb-4">
							<div class="card">
								<img
									src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg"
									class="card-img-top"
									alt="Fruit Platter"
								/>
								<div class="card-body">
									<h5 class="card-title">
										Fruit Platter with Banana, Mango, Berries and Orange
									</h5>
									<small class="text-center">admin |</small>
									<small class="card-text gray"> March 18th, 2019</small>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-4">
							<div class="card">
								<img
									src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-rachel-park-366508-unsplash-min.jpg"
									class="card-img-top"
									alt="Breakfast Delight"
								/>
								<div class="card-body">
									<h5 class="card-title">
										Breakfast Delight with Strawberry, Egg and Fruit
									</h5>
									<small class="text-center">admin |</small>
									<small class="card-text gray"> March 18th, 2019</small>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-4">
							<div class="card">
								<img
									src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-michelle-tsang-500721-unsplash-min.jpg"
									class="card-img-top"
									alt="Ice Cream Heaven"
								/>
								<div class="card-body">
									<h5 class="card-title">
										Ice Cream Heaven with Vanilla, Chocolate and Pistachio
									</h5>
									<small class="text-center">admin |</small>
									<small class="card-text gray"> March 18th, 2019</small>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-4">
							<div class="card">
								<img
									src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/quick-summer-drink.jpg"
									class="card-img-top"
									alt="Video Recipe"
								/>
								<div class="card-body">
									<h5 class="card-title">
										Video Recipe: How to Make a Cool Summer Drink
									</h5>
									<small class="text-center">Dario Pineda | </small>
									<small class="card-text gray">March 18th, 2019</small>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-4">
							<div class="card">
								<img
									src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-maarten-van-den-heuvel-400626-unsplash-min.jpg"
									class="card-img-top"
									alt="Ketogenic Diet Recipe"
								/>
								<div class="card-body">
									<h5 class="card-title">Ketogenic Diet Recipe with Avocado</h5>
									<small class="text-center">admin | </small>
									<small class="card-text gray">March 18th, 2019</small>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-4">
							<div class="card">
								<img
									src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/perfect-cosmopolitan.jpg"
									class="card-img-top"
									alt="Video Recipe Cosmopolitan"
								/>
								<div class="card-body">
									<h5 class="card-title">
										Video Recipe: The Perfect Cosmopolitan
									</h5>
									<small class="text-center">Dario Pineda | </small>
									<small class="card-text gray">March 18th, 2019</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 sidebar">
					<div class="d-flex flex-column">
						<a href="#" class="btn btn-warning blog-btn">Read Our Blog</a>
						<div class="card recipe-card mt-4">
							<img
								src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/ad-bg.jpg"
								class="card-img"
								alt="Recipes Image"
							/>
							<div class="card-img-overlay">
								<h5 class="card-title">View Our Latest Recipes</h5>
							</div>
						</div>
						<div class="card city-guide-card mt-4">
							<img
								src="https://avada.website/food/wp-content/uploads/sites/118/2019/02/singapore-featured-image.jpg"
								class="card-img"
								alt="Singapore Image"
							/>
							<div class="city-guide-overlay">
								<h5 class="card-title">City Guide: Singapore</h5>
							</div>
						</div>
						<a href="#" class="city-guide-btn">VIEW ALL CITY GUIDES</a>
						<hr />
						<div class="mt-4">
							<input class="form-control" type="text" placeholder="Search" />
							<div class="social-links my-3">
								<a href="#"
									><font-awesome-icon icon="fa-brands fa-facebook-f"
								/></a>
								<a href="#"
									><font-awesome-icon icon="fa-brands fa-instagram"
								/></a>
								<a href="#"
									><font-awesome-icon icon="fa-brands fa-x-twitter"
								/></a>
								<a href="#"
									><font-awesome-icon icon="fa-brands fa-youtube"
								/></a>
							</div>
						</div>
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item">
								<a
									class="nav-link active"
									id="popular-tab"
									data-toggle="tab"
									href="#popular"
									role="tab"
									aria-controls="popular"
									aria-selected="true"
									>Popular</a
								>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									id="recent-tab"
									data-toggle="tab"
									href="#recent"
									role="tab"
									aria-controls="recent"
									aria-selected="false"
									>Recent</a
								>
							</li>
						</ul>
						<div class="tab-content" id="myTabContent">
							<div
								class="tab-pane fade show active"
								id="popular"
								role="tabpanel"
								aria-labelledby="popular-tab"
							>
								<ul class="list-group">
									<li class="list-group-item">
										<img
											src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/single-post-img3-66x66.jpg"
											alt="Food Corner"
										/>
										<a href="#"
											>Food Corner: Top Japanese Restaurants for Sushi</a
										>
										<div class="date">
											<small>March 25th, 2019</small>
										</div>
									</li>
									<li class="list-group-item">
										<img
											src="https://avada.website/food/wp-content/uploads/sites/118/2019/02/singapore-featured-image-66x66.jpg"
											alt="City Guide"
										/>
										<a href="#">City Guide: Singapore</a>
										<div class="date">
											<small>February 27th, 2019</small>
										</div>
									</li>
									<li class="list-group-item">
										<img
											src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/fi-toasts-66x66.jpg"
											alt="Favorite Toasts"
										/>
										<a href="#"
											>Why These Toasts with Tea are My New Favorite</a
										>
										<div class="date">
											<small>March 25th, 2019</small>
										</div>
									</li>
								</ul>
							</div>
							<div
								class="tab-pane fade"
								id="recent"
								role="tabpanel"
								aria-labelledby="recent-tab"
							>
								<ul class="list-group">
									<li class="list-group-item"></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<SubscribeComponent />
	</div>
	
</template>

<style scoped lang="scss">
//FARM
.farm {
	.content-wrapper {
		padding: 30px;
	}
	.blog-btn {
		margin-top: 20px;
	}
	.recipe-card,
	.city-guide-card {
		position: relative;
	}
	.recipe-card img {
		width: 100%;
		height: 400px;
	}

	.city-guide-card img {
		width: 100%;
		height: 220px;
	}
	.recipe-card .card-img-overlay,
	.city-guide-card .city-guide-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		text-align: center;
		padding: 10px;
	}
	.city-guide-btn {
		width: 100%;
		text-align: center;
		background-color: #ff6600;
		color: white;
		padding: 10px 0;
		text-decoration: none;
		display: block;
	}
	.sidebar .form-control {
		margin-bottom: 20px;
	}
	.social-links a {
		margin-right: 10px;
		color: #333;
	}
	.nav-tabs {
		margin-bottom: 20px;
	}
	.tab-content .list-group-item {
		border: none;
		padding: 0;
	}
	.tab-content .list-group-item img {
		width: 50px;
		height: 50px;
		object-fit: cover;
		margin-right: 10px;
	}

	.btn {
		background-color: #ff6600;
		border: none;
		padding: 3px 25px;
		color:  white;
	}

	.btn-r{
		color: black;
		border-bottom: 1px solid #333;
	}

	.card-title{
		font-family: Vidaloka;
	}

	.gray{
		color: #67615A;
	}
}
</style>

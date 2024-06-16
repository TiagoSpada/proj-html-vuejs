<script>
import RecepisList from "./RecepisComonent/RecipeList.vue";
export default {
	name: "RecipeComponent",
	components: { RecepisList },

	data() {
		return {
			recipelsit: [
				{
					text: "Fruit Platter with Banana, Mango, Berries and Orange",
					ImgUrl:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg",
				},
				{
					text: "Breakfast Delight With Strawberry, Egg And Fruit",
					ImgUrl:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-rachel-park-366508-unsplash-min.jpg",
				},
				{
					text: "Ice Cream Heaven With Vanilla, Chocolate And Pistachio",
					ImgUrl:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-michelle-tsang-500721-unsplash-min.jpg",
				},
				{
					text: "Video Recipe: How to Make a Cool Summer Drink",
					ImgUrl:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/09/quick-summer-drink.jpg",
				},
				{
					text: "Ketogenic Diet Recipe with Avocado",
					ImgUrl:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-maarten-van-den-heuvel-400626-unsplash-min.jpg",
				},
				{
					text: "Video Recipe: The Perfect Cosmopolitan",
					ImgUrl:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/09/perfect-cosmopolitan.jpg",
				},
			],
		};
	},
};
</script>

<template>
	<!-- RECIPES -->
	<div class="recipes">
		<div class="container-xl mt-4 pb-4 m-w">
			<div class="row">
				<div class="col-12 text-center gray">
					<div class="recepis-title p-3">POPULAR RECIPES</div>
					<small class="d-block pb-3 pr-5"
						>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
						Suspendisse maximus lacus non nunc lacinia lobortis.</small
					>
				</div>
				<div class="col-7">
					<div class="card recepis-card">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Yogurt-Nan.jpg"
							class="card-img-top recipes-main-image"
							alt="Immagine Main"
						/>
						<div class="card-body">
							<h5 class="card-title">
								Lunch Favourite with Salad, Naan And Beans
							</h5>
							<p class="card-text text-muted grat gray">
								Bakery, Featured, Healthy, Latest Recipes, Staff Picks
							</p>
							<hr />
							<p class="card-text gray">
								Suspendisse at semper odio. Nam fringilla scelerisque tincidunt.
								Orci varius natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Donec tincidunt posuere ornare.
								Phasellus placerat odio non feugiat sollicitudin. Integer vitae
								elementum ex. Sed porttitor, diam eget convallis volutpat, arcu
							</p>
							<a href="#" class="btn btn-primary">Learn More</a>
						</div>
					</div>
				</div>
				<div class="col-5">
					<div class="row h-100">
						<RecepisList v-for="recipe in recipelsit" :recipe="recipe" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
//RECEPIS
.recipes {
	.m-w {
		max-width: 1150px;
	}

	.pr-5 {
		padding-right: 250px;
		padding-left: 250px;
	}

	.recipes-main-image {
		width: 100%;
		height: auto;
	}
	.recipes-secondary-image {
		width: 100%;
		height: 80%;
		object-fit: cover;
	}
	.recepis-card {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border: none;
	}

	.gray {
		color: #67615a;
	}

	// .ricetta1 {
	// 	background-image: url("https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg");
	// 	background-size: cover;
	// 	background-position: center;
	// }

	// .ricetta2 {
	// 	background-image: url("https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-rachel-park-366508-unsplash-min.jpg");
	// 	background-size: cover;
	// 	background-position: center;
	// }

	// .ricetta3 {
	// 	background-image: url("https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-michelle-tsang-500721-unsplash-min.jpg");
	// 	background-size: cover;
	// 	background-position: center;
	// }

	// .ricetta4 {
	// 	background-image: url("https://avada.website/food/wp-content/uploads/sites/118/2019/09/quick-summer-drink.jpg");
	// 	background-size: cover;
	// 	background-position: center;
	// }

	// .ricetta5 {
	// 	background-image: url("https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-maarten-van-den-heuvel-400626-unsplash-min.jpg");
	// 	background-size: cover;
	// 	background-position: center;
	// }
	// .ricetta6 {
	// 	background-image: url("https://avada.website/food/wp-content/uploads/sites/118/2019/09/perfect-cosmopolitan.jpg");
	// 	background-size: cover;
	// 	background-position: center;
	// }

	.card-title,
	.recepis-title {
		font-family: Vidaloka;
	}

	.btn {
		background-color: #ff6600;
		border: none;
		padding: 3px 25px;
	}
}
</style>

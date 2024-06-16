<script>
import RecipeElement from "./footer_components/RecipeListElement.vue";
import FooterInfo from "./footer_components/FooterInfo.vue";
export default {
	name: "FooterrApp",
	components: {
		RecipeElement,
		FooterInfo,
	},
	data() {
		return {
			recipesFooter: [
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
			],
		};
	},
};
</script>
<template>
	<footer>
		<div class="h-footer">
			<div class="container-fluid">
				<div class="row">
					<RecipeElement
						class="col-12 col-sm-6 col-lg-3"
						v-for="recipe in recipesFooter"
						:recipe="recipe"
					>
					</RecipeElement>
				</div>
			</div>
		</div>
		<FooterInfo />

		<div class="end-footer">
			<div class="container">
				<div class="content">
					&copy; Copyright 2012 - 2019 | <a href="">Avada Website Builder</a> by
					<a href="">ThemeFusion</a> | All Rights Reserved | Powered by
					<a href="">WordPress</a>
				</div>
			</div>
		</div>
	</footer>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

footer {
	background-color: #fff;
}

.h-footer {
	.row > * {
		padding: 0;
	}
}

.end-footer {
	background-color: #f5f6f1;
	.content {
		text-align: center;
		padding: 30px;
		font-size: 13px;
		color: #858695;
		a {
			text-decoration: none;
			color: #858695;
		}
		a:hover {
			color: $main-orange;
		}
	}
}
</style>

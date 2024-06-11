<script>
import RecipeElement from "./footer_components/RecipeListElement.vue";
export default {
	name: "FooterrApp",
	components: {
		RecipeElement,
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
		<div class="footer-info">
			<div class="container">
				<div class="row">
					<div class="col-3"><div class="content">logo</div></div>
					<div class="col-3"><div class="content">info</div></div>
					<div class="col-3"><div class="content">contatti</div></div>
					<div class="col-3"><div class="content">app</div></div>
				</div>
			</div>
		</div>
		<div class="end-footer">
			<div class="container">
				<div class="content">&copy; Copyright</div>
			</div>
		</div>
	</footer>
</template>
<style scoped lang="scss">
.active {
	display: block;
}
.h-footer {
	.row > * {
		padding: 0;
	}
}

.footer-info {
	padding: 52px 0;
	.container {
		max-width: 1248px;
		.row > * {
			padding: 0;
		}
		.content {
			height: 245px;
			background-color: lightcoral;
			outline: 1px solid black;
		}
	}
}

.end-footer {
	background-color: lightcyan;
	.content {
		text-align: center;
		padding: 30px;
	}
}
</style>

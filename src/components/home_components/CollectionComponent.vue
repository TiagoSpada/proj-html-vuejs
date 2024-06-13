<script>
export default {
	name: "CollectionComponent",
};
</script>
<template>
	<!-- COLLECTION -->
	<div class="collection">
		<div class="container-xl mt-4 pb-4">
			<div class="col-12 text-center gray p-3">CULINARY COLLECTION</div>
            <small class="gray d-block pb-3 pr-5 text-center"
						>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
						Suspendisse maximus lacus non nunc lacinia lobortis.</small
					>
			<div class="col-12">
				<div class="row text-center">
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/premium-recipes.png"
							alt="Appetisers" class="img-dim"
						/>
						<div class="colletion-title">Appetisers</div>
					</div>
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/baking-recipes.png"
							alt="Bakery" class="img-dim"
						/>
						<div class="colletion-title">Bakery</div>
					</div>
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/dinner-recipes.png"
							alt="Dinner" class="img-dim"
						/>
						<div class="colletion-title">Dinner</div>
					</div>
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/drinks-recipes.png"
							alt="Drinks" class="img-dim"
						/>
						<div class="colletion-title">Drinks</div>
					</div>
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/healthy-recipes.png"
							alt="Healthy" class="img-dim"
						/>
						<div class="colletion-title">Healthy</div>
					</div>
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/quick-easy-recipes.png"
							alt="Quick & Easy" class="img-dim"
						/>
						<div class="colletion-title">Quick & Easy</div>
					</div>
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/soups-recipes.png"
							alt="Soups" class="img-dim"
						/> 
						<div class="colletion-title">Soups</div>
					</div>
					<div class="custom-col m-3">
						<img
							src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/staff-picks.png"
							alt="Staff Picks" class="img-dim"
						/>
						<div class="colletion-title">Staff Picks</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
//COLLECTION
.collection {
	.custom-col {
		width: calc(100% / 4 - 32px);
        background-color: white;
	}

    .img-dim{
        width: 96px;
        height: 96px;
    }

    .gray{
		color: #67615A;
    }

    .pr-5 {
		padding-right: 410px;
		padding-left: 410px;
	}
}
</style>

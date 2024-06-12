<script>
import FooterApp from "../components/FooterApp.vue";

export default {
	name: "home",
	components: {
		FooterApp,
	},
};
</script>

<template>
<!-- JUMBOTRON -->
<div class="jumbotron">
	<div class="container-fluid jumbo-img h-200 p-top">
		<div class="head-jumbo container-xl d-flex justify-content-center border h-20 p-20">
		<div class="col-8 d-flex justify-content-center border">Food Corner: Top Japanese Restaurants for Sushi</div>
		</div>
	</div>
</div>

<!-- SUB JUMBOTRON-->
<div class="sub-jumbo">
	<div class="container-xl text-center border sub-jumbo-pos bg-danger-subtle pb-5">
		<h5 class="p-3">FOODIE JOURNAL</h5>
    <div class="row g-3">
      <div class="col-4">
        <div class="p-3 sub-jumbo-img text-white">Colonna 1</div>
      </div>
      <div class="col-4">
        <div class="p-3 sub-jumbo-img text-white">Colonna 2</div>
      </div>
      <div class="col-4">
        <div class="p-3 sub-jumbo-img text-white">Colonna 3</div>
      </div>
    </div>
  </div>
</div>

<!-- RECIPES -->
<div class="recipes">
	<div class="container-xl mt-4 pb-4">
    <div class="row">
      <div class="col-8">
        <div class="card recepis-card">
          <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Yogurt-Nan.jpg" class="card-img-top recipes-main-image" alt="Immagine Main">
          <div class="card-body">
            <h5 class="card-title">Lunch Favourite with Salad, Naan And Beans</h5>
            <p class="card-text text-muted">Bakery, Featured, Healthy, Latest Recipes, Staff Picks</p>
            <hr>
            <p class="card-text">Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row h-100">
          <div class="col-6 mb-3">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg" class="recipes-secondary-image" alt="Ricetta 1">
          </div>
          <div class="col-6 mb-3">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg" class="recipes-secondary-image" alt="Ricetta 2">
          </div>
          <div class="col-6 mb-3">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg" class="recipes-secondary-image" alt="Ricetta 3">
          </div>
          <div class="col-6 mb-3">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg" class="recipes-secondary-image" alt="Ricetta 4">
          </div>
          <div class="col-6">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg" class="recipes-secondary-image" alt="Ricetta 5">
          </div>
          <div class="col-6">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg" class="recipes-secondary-image" alt="Ricetta 6">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- COLLECTION -->
<div class="collection">
	<div class="container-xl mt-4 pb-4">
		<div class="col-12 text-center">CULINARY COLLECTION</div>
		<div class="col-12">
			<div class="row text-center">
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/premium-recipes.png" alt="Appetisers">
					<div class="colletion-title">Appetisers </div>
				</div>
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/baking-recipes.png" alt="Bakery">
					<div class="colletion-title">Bakery </div>
				</div>
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/dinner-recipes.png" alt="Dinner">
					<div class="colletion-title">Dinner </div>
				</div>
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/drinks-recipes.png" alt="Drinks">
					<div class="colletion-title">Drinks </div>
				</div>
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/healthy-recipes.png" alt="Healthy">
					<div class="colletion-title">Healthy </div>
				</div>
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/quick-easy-recipes.png" alt="Quick & Easy">
					<div class="colletion-title">Quick & Easy </div>
				</div>
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/soups-recipes.png" alt="Soups">
					<div class="colletion-title">Soups </div>
				</div>
				<div class="custom-col b-custom m-3">
					<img src="https://avada.website/food/wp-content/uploads/sites/118/2019/08/staff-picks.png" alt="Staff Picks">
					<div class="colletion-title">Staff Picks </div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- FARM SECTION -->
<div class="farm">
	<div class="container content-wrapper">
  <div class="row">
    <div class="col-md-8">
      <h2>Farm to Table</h2>
      <p>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</p>
      <div class="card mb-3">
        <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/single-post-img3.jpg" class="card-img-top" alt="Sushi">
        <div class="card-body">
          <h5 class="card-title">Food Corner: Top Japanese Restaurants for Sushi</h5>
          <p class="card-text">Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin.</p>
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="d-flex flex-column">
        <a href="#" class="btn btn-warning blog-btn">Read Our Blog</a>
        <div class="card recipe-card mt-4">
          <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/ad-bg.jpg" class="card-img" alt="Recipes">
          <div class="card-img-overlay">
            <h5 class="card-title">View Our Latest Recipes</h5>
          </div>
        </div>
		<div class="card city-guide-card mt-4">
          <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/02/singapore-featured-image.jpg" class="card-img" alt="Singapore Image">
          <div class="city-guide-overlay">
            <h5 class="card-title">City Guide: Singapore</h5>
          </div>
        </div>
		<a href="#" class="city-guide-btn">VIEW ALL CITY GUIDES</a>
      </div>
    </div>
  </div>
</div>
</div>


</template>

<style scoped lang="scss">

//CSS JUMBOTRON
.jumbotron{
	.jumbo-img{
		background-color: cadetblue;
		background-size: cover;
	}

	.h-200{
		height: 500px;
	}
	.h-20{
		height: 230px;
	}

	.p-top{
		padding-top: 140px;
	}

	.p-20{
		padding: 20px 20px;
	}
}

//CSS SUB JUMBO
.sub-jumbo{
	.sub-jumbo-img{
		background-color: chocolate;
		background-size: cover;
	}

	.sub-jumbo-pos{
		position: relative;
		top: -60px;
	}
}
//RECEPIS
.recipes{

    .recipes-main-image {
      width: 100%;
      height: auto;
    }
    .recipes-secondary-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .recepis-card {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border: none;
    }
}

//COLLECTION
.collection{
	.b-custom{
		border: 1px solid black;
	}

	.custom-col{
		width: calc(100% / 4 - 32px);
	}
}

//FARM 
.farm{
	.content-wrapper {
      padding: 30px;
    }
    .blog-btn {
      margin-top: 23px;
    }
    .recipe-card {
      position: relative;
      text-align: center;
      color: white;
    }
    .recipe-card img {
      width: 100%;
	  height: 450px;
    }
    .recipe-card .card-img-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
    }
	.city-guide-card {
      position: relative;
    }
    .city-guide-card img {
      width: 100%;
    }
    .city-guide-overlay {
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
      background-color: #FF6600;
      color: white;
      padding: 10px 0;
      text-decoration: none;
      display: block;
    }
}

</style>

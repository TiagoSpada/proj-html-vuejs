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
	<div class="container-fluid jumbo-img p-top">
		<div class="featured-article">
    <img src="" alt="Featured Image">
    <div class="overlay">
      <div class="badge">TODAY'S PICKS</div>
      <h2>Food Corner: Top Japanese Restaurants for Sushi</h2>
      <p>March 25, 2019</p>
    </div>
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
	<div class="container-xl content-wrapper">
  <div class="row">
    <div class="col-md-8">
      <h2>Farm to Table</h2>
      <p>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</p>
      <div class="card mb-3">
        <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/single-post-img3.jpg" class="card-img-top" alt="Sushi Image">
        <div class="card-body">
          <h5 class="card-title">Food Corner: Top Japanese Restaurants for Sushi</h5>
          <p class="card-text">Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin.</p>
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits.jpg" class="card-img-top" alt="Fruit Platter">
            <div class="card-body">
              <h5 class="card-title">Fruit Platter with Banana, Mango, Berries and Orange</h5>
              <p class="card-text">admin | March 18th, 2019</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-rachel-park-366508-unsplash-min.jpg" class="card-img-top" alt="Breakfast Delight">
            <div class="card-body">
              <h5 class="card-title">Breakfast Delight with Strawberry, Egg and Fruit</h5>
              <p class="card-text">admin | March 18th, 2019</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-michelle-tsang-500721-unsplash-min.jpg" class="card-img-top" alt="Ice Cream Heaven">
            <div class="card-body">
              <h5 class="card-title">Ice Cream Heaven with Vanilla, Chocolate and Pistachio</h5>
              <p class="card-text">admin | March 18th, 2019</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/quick-summer-drink.jpg" class="card-img-top" alt="Video Recipe">
            <div class="card-body">
              <h5 class="card-title">Video Recipe: How to Make a Cool Summer Drink</h5>
              <p class="card-text">Dario Pineda | March 18th, 2019</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-maarten-van-den-heuvel-400626-unsplash-min.jpg" class="card-img-top" alt="Ketogenic Diet Recipe">
            <div class="card-body">
              <h5 class="card-title">Ketogenic Diet Recipe with Avocado</h5>
              <p class="card-text">admin | March 18th, 2019</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/09/perfect-cosmopolitan.jpg" class="card-img-top" alt="Video Recipe Cosmopolitan">
            <div class="card-body">
              <h5 class="card-title">Video Recipe: The Perfect Cosmopolitan</h5>
              <p class="card-text">Dario Pineda | March 18th, 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 sidebar">
      <div class="d-flex flex-column">
        <a href="#" class="btn btn-warning blog-btn">Read Our Blog</a>
        <div class="card recipe-card mt-4">
          <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/ad-bg.jpg" class="card-img" alt="Recipes Image">
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
        <hr>
        <div class="mt-4">
          <input class="form-control" type="text" placeholder="Search">
          <div class="social-links my-3">
            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
          </div>
          </div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="popular-tab" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="true">Popular</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="recent-tab" data-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected="false">Recent</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="popular" role="tabpanel" aria-labelledby="popular-tab">
              <ul class="list-group">
                <li class="list-group-item">
                  <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/single-post-img3-66x66.jpg" alt="Food Corner">
                  <a href="#">Food Corner: Top Japanese Restaurants for Sushi</a>
                  <div class="date">
                  <small>March 25th, 2019</small>
                </div>
                </li>
                <li class="list-group-item">
                  <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/02/singapore-featured-image-66x66.jpg" alt="City Guide">
                  <a href="#">City Guide: Singapore</a>
                  <div class="date">
                  <small>February 27th, 2019</small>
                </div>
                </li>
                <li class="list-group-item">
                  <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/fi-toasts-66x66.jpg" alt="Favorite Toasts">
                  <a href="#">Why These Toasts with Tea are My New Favorite</a>
                  <div class="date">
                  <small>March 25th, 2019</small>
                </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="recent" role="tabpanel" aria-labelledby="recent-tab">
              <ul class="list-group">
                <li class="list-group-item"></li>
              </ul>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

//SUBSRIBE 
<div class="subscribe p-60">
  <div class="container-xl">
    <h2>Subscribe & Receive A Free eBook</h2>
    <p>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</p>
    <form class="form-inline justify-content-center d-flex">
      <input type="email" class="form-control mb-2 mr-sm-2 w-35" placeholder="Insert your email">
      <button type="submit" class="btn btn-warning ms-3">SUBSCRIBE</button>
    </form>
    <p>Cras porttitor pellentesque sem eu pretium.</p>
  </div>
</div>

</template>

<style scoped lang="scss">

//CSS JUMBOTRON
.jumbotron{
   background-image: url('https://avada.website/food/wp-content/uploads/sites/118/2019/02/slide1-bg.jpg');
   background-size: cover;
   background-position: center;
   padding:175px 0;

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

  .featured-article {
      position: relative;
      text-align: center;
      color: white;
    }
    .featured-article img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .featured-article .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(255, 255, 255, 0.9);
      padding: 20px;
      border-radius: 10px;
      color: #333;
    }
    .badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #FF6600;
      color: white;
      padding: 5px 10px;
      font-size: 0.9rem;
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
      margin-top: 20px;
    }
    .recipe-card, .city-guide-card {
      position: relative;
    }
    .recipe-card img{
      width: 100%;
      height: 400px;
    }

    .city-guide-card img {
      width: 100%;
      height: 220px;
    }
    .recipe-card .card-img-overlay, .city-guide-card .city-guide-overlay {
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
}

//SUBSCRBE
.subscribe{
      background: url('https://avada.website/food/wp-content/uploads/sites/118/2019/03/subscribe-sec-bg.png') no-repeat center center;
      background-size: cover;
      padding:210px 0;
      text-align: center;
      color: #333;
    
      .subscribe-section .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle;
        border-radius: 0;
      }
      .subscribe-section .btn {
        vertical-align: middle;
        border-radius: 0;
        padding: 10px 20px;
      }

      .w-35{
        width: 35%;
      }

  }
</style>

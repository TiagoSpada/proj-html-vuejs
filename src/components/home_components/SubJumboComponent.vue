<script>
export default {
	name: "SubJumboComponent",
};
</script>

<template>
 <!-- SUB JUMBOTRON-->
 <div class="sub-jumbo">
	<div class="container-xl text-center  sub-jumbo-pos bg-body pb-3">
		<h5 class="p-4 gray">FOODIE JOURNAL</h5>
    <div class="row">
    <div class="col-md-4 article-card">
      <div class="card">
        <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/single-post-img3.jpg" class="card-img-top" alt="Food Corner">
        <div class="card-body">
          <h5 class="card-title">Food Corner: Top Japanese Restaurants for Sushi</h5>
          <p class="card-text">
            <small class="admin">admin</small>
            <small class="text-muted"> | March 25th, 2019</small>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 article-card">
      <div class="card">
        <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/fi-roundup.jpg" class="card-img-top" alt="Roundup">
        <div class="card-body">
          <h5 class="card-title">Roundup: My New Favourite Recipes For Healthy Living</h5>
          <p class="card-text">
            <small class="admin">admin</small>
            <small class="text-muted"> | March 25th, 2019</small>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 article-card">
      <div class="card">
        <img src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/fi-korean-food.jpg" class="card-img-top" alt="Meal Prep">
        <div class="card-body">
          <h5 class="card-title">Meal Prep: Korean Bibimbap with Kimchi</h5>
          <p class="card-text">
            <small class="admin">admin</small>
            <small class="text-muted"> | March 25th, 2019</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped lang="scss">
//CSS SUB JUMBO
.sub-jumbo{
	.sub-jumbo-img{
		background-color: chocolate;
		background-size: cover;
	}

	.sub-jumbo-pos{
		position: relative;
		top: -60px;
        max-width: 1150px;
	}

  .card {
      border: none;
    }

    .gray,  .text-muted{
		color: #67615A;
	}

    .card-title{
		font-family: Vidaloka;
	}
}
</style>

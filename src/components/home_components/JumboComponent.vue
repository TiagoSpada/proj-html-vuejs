<script>
export default {
	name: "JumboComponent",
};
</script>
<template>
	<!-- JUMBOTRON -->
<div class="jumbotron">
	<div class="container-fluid p-top flex-column pb-90">
		<div class="featured-article">
    <div class="overlay pb-3">
      <div class="badge p-3">TODAY'S PICKS</div>
      <h2 class="font mt-3">Food Corner: Top Japanese Restaurants for Sushi</h2>
      <p class="gray">March 25, 2019</p>
    </div>
  </div>
	</div>
</div>
</template>

<style scoped lang="scss">
//CSS JUMBOTRON
.jumbotron{
   background-image: url('https://avada.website/food/wp-content/uploads/sites/118/2019/02/slide1-bg.jpg');
   background-size: cover;
   background-position: center;
   padding:175px;

	.pb-90{
		padding-bottom: 90px;
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
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      color: #333;
	  max-width: 630px;
    }
    .badge {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #FF6600;
      color: white;
      padding: 5px 10px;
      font-size: 0.9rem;
    }

	.font{
		font-family: Vidaloka;
		font-size: 45px;
	}

	.gray{
		color: #67615A;
		font-size: smaller;

	}


}

</style>

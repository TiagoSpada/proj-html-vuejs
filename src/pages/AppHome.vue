<script>
export default {
	name: "home",
};
</script>

<template>
<h1>Pagina home</h1>
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

</style>

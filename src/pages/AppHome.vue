<script>
export default {
	name: "home",
};
</script>

<template>
<h1>Pagina home</h1>
// JUMBOTRON
<div class="jumbotron">
	<div class="container-fluid jumbo-img h-200 p-top p-bottom">
		<div class="head-jumbo container-xl d-flex justify-content-center border h-20 p-20">
		<div class="col-8 d-flex justify-content-center border">Food Corner: Top Japanese Restaurants for Sushi</div>
		</div>
	</div>
</div>

</template>

<style scoped lang="scss">

//CSS JUMBOTRON
.jumbotron{
	.jumbo-img{
		background-color: cadetblue;
		background-size: cover; /* Adatta l'immagine per coprire interamente il container */
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

</style>

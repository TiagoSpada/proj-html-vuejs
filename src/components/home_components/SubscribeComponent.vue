<script>
export default {
	name: "SubscribeComponent",
};
</script>

<template>
	<div class="subscribe p-60">
		<div class="container-xl">
			<div class="title-text">
			<h2 class="d-inline">Subscribe </h2> <h2 class="orange d-inline"> & </h2> <h2 class="d-inline">Receive A Free eBook</h2>
		</div>
			<p class="gray p-3">
				Aliquam erat volutpat. Ut quis ligula a magna blandit finibus.
				Suspendisse maximus lacus non nunc lacinia lobortis.
			</p>
			<form class="form-inline justify-content-center d-flex">
				<input
					type="email"
					class="form-control mb-2 mr-sm-2 w-35"
					placeholder="Insert your email"
				/>
				<button type="submit" class="btn btn-warning ms-3">SUBSCRIBE</button>
			</form>
			<p class="gray p-3">Cras porttitor pellentesque sem eu pretium.</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
//SUBSCRIBE
.subscribe {
	background: url("https://avada.website/food/wp-content/uploads/sites/118/2019/03/subscribe-sec-bg.png")
		no-repeat center center;
	background-size: cover;
	padding: 210px 0;
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

	.w-35 {
		width: 35%;
	}

	.orange{
		color: #ff6600;
	}

	.title-text{
		font-family: Vidaloka;
	}

	.gray{
		color: #67615A;
	}

	.btn {
		background-color: #ff6600;
		border: none;
		padding: 0px 25px;
		color: white;
	}
}
</style>

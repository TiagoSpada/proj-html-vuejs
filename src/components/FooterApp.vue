<script>
export default {
	name: "FooterrApp",
	data() {
		return {};
	},
};
</script>
<template>
	<footer>
		<div class="h-footer">
			<div class="container-fluid">
				<div class="row">
					<div class="col-6 col-lg-3" v-for="n in 4">
						<div class="content">img {{ n }}</div>
					</div>
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
.h-footer {
	.row > * {
		padding: 0;
	}
	.content {
		height: 310px;
		background-color: lightblue;
		outline: 1px solid black;
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

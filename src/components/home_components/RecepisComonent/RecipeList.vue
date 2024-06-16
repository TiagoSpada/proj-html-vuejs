<script>
export default {
	name: "RecipeList",
	props: ["recipe"],
	data() {
		return {
			MouseHover: false,
		};
	},
};
</script>
<template>
	<div class="col-6 mb-3">
		<div
			class="content h-100"
			:style="{ backgroundImage: 'url(' + recipe.ImgUrl + ')' }"
			@mouseenter="MouseHover = true"
			@mouseleave="MouseHover = false"
		>
			<Transition name="hover">
				<div class="text-image" v-show="MouseHover">
					<a href="">{{ recipe.text }}</a>
				</div>
			</Transition>
		</div>
	</div>
</template>
<style scoped lang="scss">
.hover-move,
.hover-enter-active,
.hover-leave-active {
	transition: 0.4s ease;
}

.hover-enter-from,
.hover-leave-to {
	opacity: 0;
	transform: rotate(15deg);
}

.content {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	cursor: pointer;
	.text-image {
		display: flex;
		height: 100%;
		text-align: center;
		background: rgb(252, 117, 35);
		background: linear-gradient(
			0deg,
			rgba(252, 117, 35, 1) 18%,
			rgba(252, 117, 35, 0.6544818611038166) 44%,
			rgba(252, 117, 35, 0.11946785550157568) 100%
		);
		a {
			color: #fff;
			font-weight: bold;
			text-decoration: none;
			font-size: 16px;
			margin: auto;
		}
	}
}
</style>

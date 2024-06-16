<script>
import ourAchievements from "../components/about_components/achievements.vue";
import Testimonials from "../components/about_components/testimonials.vue";
import Touch from "../components/about_components/touch.vue";
export default {
	name: "Abou",
	components: {
        ourAchievements,
		Testimonials,
		Touch,
    },
		data() {
		return {
			recipes: [
				{
					text: "Lunch Favourite with Salad, Naan and Beans",
					url:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/Yogurt-Nan-1200x790.jpg",
				},
				{
					text: "Fruit Platter with Banana Mango, Berries and Orange",
					url:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/Mixed-fruits-1200x790.jpg",
				},
				{
					text: "Breakfast Delight With Strawberry, Egg and Fruit",
					url:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-rachel-park-366508-unsplash-min-1200x790.jpg",
				},
				{
					text: "Ice Cream Heaven With Vanilla, Chocolate And Pistachio",
					url:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-michelle-tsang-500721-unsplash-min-1200x790.jpg",
				},
				{
					text: "Video Recipe: How to Make a Cool Summer Drink",
					url:
						"https://i.vimeocdn.com/video/510057978-e62f375a5aa91503cdd426caa78481931deec795af80ae2d8046d2fd0eed17b3-d_1200x675",
				},
				{
					text: "Ketogenic Diet Recipe with Avocado",
					url:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/r-maarten-van-den-heuvel-400626-unsplash-min-1200x790.jpg",
				},
				{
					text: "Video Recipe: The Perfect Cosmopolitan",
					url:
						"https://i.vimeocdn.com/video/384468655-9580ab2664a3b7c0f6c3ffda3164138efceb0ec278aa9ae632f1c628d8b1a623-d_1200x675",
				},
				{
					text: "Summer Cheese Platter with Berries, Crackers and Wine",
					url:
						"https://avada.website/food/wp-content/uploads/sites/118/2019/03/fi2x-6-1200x790.jpg",
				},
			],
		};
	},
};
</script>

<template>
	<main>
		<!-- about us -->

		<div class="container-fluid fondo">
			<div class="d-flex">
				<div class="jumbo">
					<h2>About Us</h2>
					<p>
						About Avada Food Blog. About our amazing Journey so far
					</p>
				</div>
			</div>
		</div>

		<!-- immagini hover -->

		<div class="mb-5">
			<div class="container">
				<div class="row ">
					<div class="col-sm-12 col-lg-6 contact-info">
						<div class="content">
							<div class=" text-center">
								<div class="row hg">
									<div class="col-6 square" v-for="(result, index) in recipes" :key="index">
										<div class="image-wrapper">
											<img class="anime" :src="result.url" :alt="result.text" />
											<div class="overlay">
												<h5>{{ result.text }}</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- our -->

					<div class="col-sm-12 col-lg-5">
						<div class="our">
							<div class="star">
								<h2>OUR STORY</h2>
							</div>
							<p class="py-1">Lorem ipsum dolor sit amet,Donec consectetur adipiscing elit. Praesent in varius ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat. Phasellus vel semper ante. Vivamus turpis purus, dapibus vitae ex a, varius ornare elit. Nullam eu purus congue, bibendum felis id, aliquet ante.</p>
							<p class="py-1">Donec porttitor, diam quis posuere lacinia, justo libero consequat mi, at euismod lacus mi in erat. Cras sit amet ornare orci.</p>
							<div class="s-star">
								<h2>ABOUT OUR COMPANY</h2>
							</div>
							<p class="py-1">Curabitur id nibh sit amet lectus efficitur tempus aliquet non ante. Aenean feugiat, enim suscipit dictum ullamcorper, tellus nunc mollis leo, vitae elementum lacus lorem tempor ante. Maecenas ac aliquet risus, nec fringilla sem. Nam sed nibh id arcu vestibulum malesuada pretium sed nisl. Nunc tristique, dui ac interdum scelerisque, arcu purus faucibus nisl.</p>
							<p class="py-1">Praesent condimentum ligula lacus, id dignissim mi feugiat non. Nulla vel velit nisi. Nam vitae eros ullamcorper dolor dapibus pellentesque. In non iaculis.</p>

						</div>
					</div>
				</div>
				<!-- tre cards -->
				<div class="row">
					<div class="col-sm-12 col-lg-4">
						<font-awesome-icon icon="square-check" />
						<div class="stringaone">
							<h2 class="py-4">AUTHENCITY</h2>
						</div>
						<p>Aenean eu arcu sed velit mattis vehicula ac quis tellus. Suspendisse elementum justo neque, a tincidunt est congue quis.</p>
					</div>
					<div class="col-sm-12 col-lg-4">
						<font-awesome-icon icon="file-lines" />
						<div class="stringa">
							<h2 class="py-4">REAL REVIEWS</h2>

						</div>
						<p>Praesent erat eros, malesuada nec augue non, aliquet finibus orci. Duis vitae cursus tortor. Suspendisse blandit volutpat.</p>
					</div>
					<div class="col-sm-12 col-lg-4">
						<font-awesome-icon icon="utensils" />
						<div class="stringaterzo">
							<h2 class="py-4">UNIQUE RECIPES</h2>

						</div>
						<p>Donec vel volutpat erat. Sed in nulla vitae elit accumsan tempus. Aliquam dapibus ligula gravida, blandit enim ac, sagittis justo.</p>
					</div>
				</div>
			</div>
		</div>

		<ourAchievements />

		<Testimonials />

		<Touch />
		
	</main>

</template>

<style scoped lang="scss">
@use "../assets/scss/partials/_variables" as *;
@use "../assets/scss/partials/mixin" as *;


.fondo {
  background-image: url(https://avada.website/food/wp-content/uploads/sites/118/2019/03/page-title-bar-bg-1.png);
  background-color: #67615a;
  height: 460px;
  background-size: cover;
  .d-flex {
    height: 100%;
    .jumbo {
      text-align: center;
      color: white;
      margin: auto;
      h2 {
        font-family: "Vidaloka";
        font-size: 42px;
        line-height: 1.4;
      }
      p {
        font-size: 16px;
        color: #e4d5ce;
      }
    }
  }
}

.contact-info {
  	position: relative;
  	top: -80px;
  	.content {
		background-color: red;
		.hg {
			height: 970px;
			.square {
					padding: 0px;
				
			}
		}
	}
}
.image-wrapper {
          position: relative;
		  height: 100%;
          img {
            width: 100%;
			height: 100%;
            display: block;
          }
		
		.overlay {
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
					0deg,
					rgba(252, 117, 35, 1) 20%,
					rgba(252, 117, 35, 0.54) 50%,
					rgba(252, 117, 35, 0.100) 100%
					);
            opacity: 0;
            transition: opacity 0.3s ease;
			
          }
          &:hover .overlay {
            opacity: 1;
          }
}

.col-lg-5{
	.our{
		margin-top: 3.5rem;
		margin-left: 3.5rem;
		.star{
			display: flex;
			align-items: center;
			&::after{
				content:'';
				width: 67%;
				height: 2px;
				background-color: currentColor;
				display: block;
			}
		}
	}
}
h2{
		font-family: Catamaran, Arial, Helvetica, sans-serif;
		font-weight: 600;
		font-style: normal;
		font-size: 1.4rem;
		margin: 0px;


}
.s-star{
	display: flex;
	align-items: center;
	&::after{
			content:'';
			width: 42%;		
			height: 2px;
			background-color: currentColor;
			display: block;
	}
}
svg{
	font-size: 35px;
	color: #67615a;
}
.col-lg-4{
	.stringaone{
		display: flex;
		align-items: center;
		&::after{
		@include riga(70%)
		}
	}
	.stringa{
		display: flex;
		align-items: center;
		&::after{
		@include riga(60%)
		}
	}
	.stringaterzo{
		display: flex;
		align-items: center;
		&::after{
		@include riga(50%)
		}
	}
}

</style>

<script>
export default {
	name: "ourAchievements",
		data() {
		return {
			best: [
				{
					text: `Praesent quam magna, varius in laoreet in, condimentum at augue. Suspendisse viverra scelerisque lacus.`,					
                    tittle: `Best Food Blog of 2018`,
					bestUrl:
						`https://avada.website/food/wp-content/uploads/sites/118/2019/03/achievment-1-400x225.jpg`,
				},
				{
					text: `Praesent quam magna, varius in laoreet in, condimentum at augue. Suspendisse viverra scelerisque lacus.`,					
					tittle: `Break-Through Recipe #1`,
					bestUrl:
						`https://avada.website/food/wp-content/uploads/sites/118/2019/03/achievment-2-400x225.jpg`,
				},
				{
					text: `Praesent quam magna, varius in laoreet in, condimentum at augue. Suspendisse viverra scelerisque lacus.`,					
                    tittle: `Best Food Blog of 2018`,
					bestUrl:
						`https://avada.website/food/wp-content/uploads/sites/118/2019/03/achievment-3-400x225.jpg`,
				},
			],
			number: [
				{
					ber: 89,
					testo: `Unique Recipes`,
				},
				{
					ber: 35,
					testo: `Online Courses`,
				},
				{
					ber: `500k`,
					testo: `Monthly Pageviews`,
				},
				{
					ber: 17,
					testo: `Books Published`,
				},
				{
					ber: 31,
					testo: `Chef Interviews`,
				},
			]
		};
	},
};
</script>
<template>
    <div class="part_due">
        <div class="container text-center">
            <h2>OUR ACHIEVEMENT</h2>
            <p class="achi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.</p>
			<div class="row">
				<div class="col-sm-12 col-lg-4" v-for="card in best">
					<div class="card">
						<div class="image-box">
							<img :src="card.bestUrl" class="card-img-top" alt="">
						</div>
						<div class="card-body">
							<h5 class="card-title font">{{card.tittle}}</h5>
							<p class="card-text">{{card.text}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row gap-4">
				<div class="col-2 mar" v-for="inter in number">
					<h1 class="number">{{ inter.ber }}</h1>
					<p>{{ inter.testo }}</p>
				</div>
			</div>
        </div>
    </div>
</template>
<style scoped  lang="scss">
.part_due{
	padding: 7rem 0;
    background-color: #edede8;
    background-image: url(https://avada.website/food/wp-content/uploads/sites/118/2019/03/recipe-bg-25.png);
    background-size: cover;
	.text-center{
		h2{
			font-size: 1rem;
		}
		.achi{
			margin: 3rem 20rem;
		}
		.gap-4{
			.number{
				color: #f97423;
				margin-bottom: 15px;
			}
			.mar{
				margin: 50px 9px;
				padding: 30px 0;
				border: 1px solid rgb(212, 211, 209);
			}
		}
	}
	.font{
		font-family: Vidaloka;
		font-size: 20px;
	}
	.image-box{
		position:relative;
		overflow: hidden;
		
		}
		img{
			transition: transform 0.6s ease;
			&:hover{
			transform: scale(1.2);
		}
		}
		
	}
	
</style>
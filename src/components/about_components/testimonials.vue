<script>
export default {
	name: "testimonials",
		data() {
		return {
			team: [
                {
                    nome: `Wayne Barnett`,
                    ruolo: `Founder & CEO`,
                    foto: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/Team1-600x643.jpg`
                },
                {
                    nome: `Angela Caroll`,
                    ruolo: `Chief Editor`,
                    foto: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/Team2-600x643.jpg`
                },
                {
                    nome: `Walter Gordon`,
                    ruolo: `Office Manager`,
                    foto: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/Team3-600x643.jpg`
                },
                {
                    nome: `Angela Lopez`,
                    ruolo: `Social Media Manager`,
                    foto: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/team4-400x429.jpg`
                },
                {
                    nome: `Scott Estrada`,
                    ruolo: `Developer`,
                    foto: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/team5-400x429.jpg`
                },
                {
                    nome: `Barbara Ramos`,
                    ruolo: `GraphicDesigner`,
                    foto: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/Team6-600x643.jpg`
                }
            ],
            avada:[
                {
                   lr: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/food-review.png`,
                   to:`One of the best food blog of 2018 about organic food and unique recipes. Proin vel iaculis turpis.`,
                   january:`-Avada Food Mag, January 2019`,

                },
                {
                   lr: `https://avada.website/food/wp-content/uploads/sites/118/2019/03/Food-Review-2.png`,
                   to:`Best blog for American Recipes and very good for learning cookings for anyone. Praesent id tempus sem.`,
                    january:`-Food Blog Hunt, January 2019`,

                }
            ]
        }
    }
};
</script>
<template>
    <div class="part_tre">
        <div class="container text-center">
            <h2>TESTIMONIALS</h2>
            <p class="achi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.</p>
            
            <div class="row gap-5 p-2">
                <div class="col-sm-12 col-lg-6 bianco p-5 pb-0 gap text-center">
                    <img class="circle" src="https://avada.website/food/wp-content/uploads/sites/118/2019/03/photo-1509868918748-a554ad25f858-e1552556269564.jpeg" alt="">
                    <div class="py-5">
                        <em class="d-inline">
                        <span class="virgolette">“</span>
                        Curabitur vulputate ex est, eget congue nibh ultricies ac. Integer ut maximus elit. Nam tempor hendrerit accumsan. Pellentesque sodales lectus a rhoncus porta. Donec non tincidunt enim. Duis sollicitudin quam vitae ex elementum scelerisque. Integer ut maximus.</em>

                        <p class="inhe py-5"><strong> AMY PEREZ, XYZ CompanyName</strong></p>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-5">
                    <div class="col-12 bianco mb-5 p-4" v-for="food in avada">
                        <div class="d-flex">
                            <img class="w-25" :src="food.lr" alt="">
                            <h5>{{ food.to }}</h5>                    
                        </div>
                        
                        <div class="d-block">
                            <em class="d-inline">
                        <span class="q-virgolette">“</span>
                        {{ food.january }}</em>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class=" text-center  p-5">
                <h6>OUR WRITERS</h6>
                <p class="pad">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus facere laborum corrupti nam minima sint suscipit itaque soluta perferendis commodi. Iusto est quasi ex suscipit, nostrum molestiae deserunt veniam sed?</p>
                <div class="grid center">
                    <div class="row">
                        <div class="col-sm-12 col-lg-4" v-for="writer in team">
                            <div class="card mb-4">
                                <div class="image-box">
                                    <img :src="writer.foto" class="card-img-top" alt="">
                                </div>
                                <div class="pt-2 pb-4">
                                    <h3>{{writer.nome }}</h3>
                                    <em >{{writer.ruolo}}</em>
                                </div>
                            </div>
                        </div>
			        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@use "../../assets/scss/partials/utils" as *;

.part_tre{
	padding-top: 5rem;
    background-color: #edede8;
	.text-center{
		h2{
			font-size: 1rem;
		}
		.achi{
			margin: 3rem 20rem;
		}
    }
    .bianco{
        background-color: white;
    }
    .gap{
        gap: 0 2rem;
        .circle{
            width: 30%;
            aspect-ratio: 1/1;
            border-radius: 50%;
        }
        .virgolette{
            @extend .virgo;
            top: 4px;
            float: left;
            font-size: 70px;
        }
        .inhe{
            font-family: inherit;
            font-weight: inherit;
            font-style: inherit;
            line-height: inherit;
            text-transform: inherit;
            font-size: 1.25rem;
        }
    }   
    .q-virgolette{
        @extend .virgo;
        display: inline-flex;
        bottom: -20px;
        font-size: 60px;
    }
    .d-flex{
        h5{
            line-height: 1.22;
            &:hover{
                color: #fc7523;
            }

        }
    }
    .d-block{
        color: gray;
        d-inline{
            line-height: 1.22;
        }
    }

    .text-center{
        .pad{
            padding: 1.5rem 20rem;
        }
    }
    /***********
    zoom 
    ************/
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
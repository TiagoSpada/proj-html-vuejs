<script>
export default{
    name: "HeaderApp"
}
</script>
<template>
        <header>
            <div class="container d-flex flex-wrap justify-content-center justify-content-md-between py-4 mb-4">
                <!-- Download app -->
                <nav class="col-md-3 mb-2 mb-md-0">
                    <a href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=QhvVUE01ixyKWyNxtHx-hTEWUkHX8fSecQv22c0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius">Download App 
                        <span class="orange px-2 text-white">iOS</span> 
                    </a>
                    <a class="px-3" href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=QhvVUE01ixyKWyNxtHx-hTEWUkHX8fSecQv22c0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius">Advertise with us</a>
                     
                </nav>
                <!-- menu -->
                <nav class="justify-content-center text-center col-12 col-md-7 ">
                    <img class="w-35" src="https://avada.website/food/wp-content/uploads/sites/118/2021/04/avada-food-logo.svg" alt="avada-foo">
        
                    <ul class="nav  mb-2  mb-md-0 pt-3">
                        <li class="nav-link px-4">
                            <router-link :to="{ name: 'home' }"><strong>Home</strong></router-link>
                        </li>
                        <li class="nav-link px-4">
                            <a href=""><strong>Recipes</strong></a>
                        </li>
                        <li class="nav-link px-4">
                            <a href=""><strong>Places</strong></a>
                        </li>
                        <li class="nav-link px-4">
                            <a href=""><strong>Blog</strong></a>
                        </li>
                        <li class="nav-link px-4">
                            <router-link :to="{ name: 'about' }"><strong>About</strong></router-link>
                        </li>
                        <li class="nav-link px-4">
                            <router-link :to="{ name: 'contact' }"><strong>Contact</strong></router-link>
                        </li>
                    </ul>

                </nav>
                <!-- icons -->
                <nav class="col-md-2 text-end">
                
                </nav>

            </div>
        </header>
</template>
<style scoped lang="scss">
$header-f: #f5f5f1;
$a-fc: #fc7523;
$header-text: #33475b;
    header{
        background-color: $header-f;
        color: $header-text;
        div{
            nav{
                a{
                    font-size: 14px;
                }
                a:hover{
                    color: $a-fc;
                }
            }
            nav{
                // image: avada food
                .w-35{
                    width: 35%;
                }
                //menu: 
                ul{
                    a:hover{
                        padding-bottom: 1rem;
                        border-bottom: 2px solid ;
                    }
                }
            }
        }
        
        .orange{
            background-color: $a-fc;
            border-radius: 4px;
        }
        a{
         color: $header-text;           
        }
        strong{
            font-size: 15px;
        }

    }
    
</style>

<script>
import icon from "./header_components/icons.vue";
export default{
    name: "HeaderApp",
    components: {
        icon,
    },
    data() {
        return{
            isActive: false,
            bool: false,
            avad: `https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=QhvVUE01ixyKWyNxtHx-hTEWUkHX8fSecQv22c0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius`
            
        }
    },
    methods:{
        searchActive(){
            this.isActive =true
        },
        closeActive() {
            this.isActive = false
        },
        setActiveMenu(menu) {
            this.activeMenu = menu;
        },
    }
}
</script>
<template>
        <header>
            <div class="container d-flex flex-wrap justify-content-center justify-content-md-between pt-4" :class="[ { app: isActive }]">
                <!-- Download app -->
                <div class="col-md-3 mb-2 mb-md-0">
                    <a :href="avad">Download App 
                        <span class="orange px-2 text-white">iOS</span> 
                    </a>
                    <a class="px-3" :href="avad">Advertise with us</a>
                     
                </div>
                <!-- menu -->
                <div class="justify-content-center text-center col-12 col-md-7 ">
                    <img class="w-35" src="https://avada.website/food/wp-content/uploads/sites/118/2021/04/avada-food-logo.svg" alt="avada-foo">
        
                    <ul class="nav mb-md-0 py-4 relazione">
                        <li class="px-4 index">
                            <router-link :to="{ name: 'home' }"><strong  :class="{ select: activeMenu === 'Home' }" @click="setActiveMenu('Home')">Home</strong></router-link>
                        </li>
                        <li class="px-4 index">
                            <a href="" ><strong  :class="{ select: activeMenu === 'Recipes' }" @click="setActiveMenu('Recipes')">Recipes</strong></a>
                        </li>
                        <li class="px-4 index">
                            <a href=""><strong  :class="{ select: activeMenu === 'Places' }" @click="setActiveMenu('Places')">Places</strong></a>
                        </li>
                        <li class="px-4 index">
                            <a href=""><strong  :class="{ select: activeMenu === 'blog' }" @click="setActiveMenu('blog')">Blog</strong></a>
                        </li>
                        <li class="px-4 index">
                            <router-link :to="{ name: 'about' }"><strong  :class="{ select: activeMenu === 'About' }" @click="setActiveMenu('About')">About</strong></router-link>
                        </li>
                        <li class="px-3 index">
                            <router-link :to="{ name: 'contact' }"><strong  :class="{ select: activeMenu === 'Contact' }" @click="setActiveMenu('Contact')">Contact</strong></router-link>
                        </li>
                        <li :class="[ { limenu: isActive }]">
                                <div :class="['searchBox', { active: isActive } ]">
                                    <div :class="['search rounded-start', { attivare: isActive }]" @click="searchActive">
                                        <font-awesome-icon icon="magnifying-glass" />                                    
                                    </div>
                                    <div class="inputSearch">
                                        <input class="ricerca rounded-end" type="text" placeholder="Search">                                
                                    </div>
                                    <div class="close" @click="closeActive">
                                        <font-awesome-icon icon="xmark" />
                                    </div>
                                </div>

                            
                        </li>
                    </ul>
                    


                </div>
                <!-- icons -->
                 <icon />

            </div>
        </header>
</template>

<style scoped lang="scss">
$header-f: #f5f5f1;
$a-fc: #fc7523;
$header-text: #33475b;

header {
    background-color: $header-f;
    color: $header-text;

    .container {
        div {
            a {
                font-size: 14px;

                &:hover {
                    color: $a-fc;
                }
            }

            .w-35 {
                width: 35%;
            }

            .relazione {
                .index {
                    a:hover {
                        padding-bottom: 1rem;
                        border-bottom: 2px solid;
                    }
                }
            }
        }
    }
    
    .orange {
        background-color: $a-fc;
        border-radius: 4px;
    }

    a {
        color: $header-text;
    }

    strong {
        font-size: 15px;
    }
}
.select{
    padding-bottom: 1rem;
    border-bottom: 2px solid;
    color: $a-fc;
}

.relazione {
    position: relative;
}

.limenu {
    position: absolute;
    top: 0;
    z-index: 1;
}

.app{
    padding-bottom: 2rem;
}
.searchBox {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    z-index: 5;

    &.active {
        width: 100%;
        z-index: 20;
        margin: 20px 0;
    }

    .search {
        position: relative;
        min-width: 60px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        color: #33475b;
        
        font-size: 1.2rem;
        height: 56.5px;
        padding: 3px 0;
    }

    .close {
        position: relative;
        width: 60px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        color: #33475b;

        
        height: 60px;
        align-items: center;
        font-size: 1.7rem;
    }

    .inputSearch{
        .ricerca {
            width: 520px;
            padding: 1rem;
            border: none;
            outline: none;
        }
    }
}
.attivare{
    display: flex;
    align-items: center;
    background-color: white;
}
</style>

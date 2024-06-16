<script>
export default {
    name: Touch,
};
</script>
<template>
        <div class="part_qua d-flex align-items-center ">
        <div class="container d-flex align-items-center justify-content-center flex-column">
            <h1>We Are Hiring. Let’s Get in Touch.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.</p>
            <router-link class="ora py-2 " :to="{ name: 'contact' }"><strong>Contact Us</strong></router-link>

        </div>
    </div>
</template>
<style scoped lang="scss">

.part_qua{
    background-image: url(https://avada.website/food/wp-content/uploads/sites/118/2019/03/subscribe-sec-bg.png);
    background-size: cover;
    background-color: white;
    height: 528px;
    .ora{
        background-color: #fc7523;
        font-size: 2rem;
        color: white;
        padding: 0.5rem 4.5rem;
        transition: 0.5s;
        
    }
}

</style>
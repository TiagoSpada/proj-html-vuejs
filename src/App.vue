<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
export default{
	components:{
		HeaderApp,
		FooterApp,
	},
}
</script>

<template>
	<HeaderApp />
	<router-view></router-view>
	<FooterApp />
</template>

<style></style>

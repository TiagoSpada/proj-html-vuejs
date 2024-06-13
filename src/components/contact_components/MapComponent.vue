<script>
export default {
	name: "MapComponent",
};
</script>
<template>
	<div class="map">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3026.854573624512!2d-73.946785!3d40.655136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b6617a81121%3A0x9d5cc54407bdb5fa!2s775%20New%20York%20Ave%2C%20Brooklyn%2C%20NY%2011203!5e0!3m2!1sen!2sus!4v1718106532628!5m2!1sen!2sus"
			width="100%"
			height="100%"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</template>

<style scoped lang="scss">
.map {
	margin-bottom: 10px;
	width: 100vw;
	height: 500px;
}
</style>

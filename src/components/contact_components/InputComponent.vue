<script>
export default {
	name: "InputComponent",
};
</script>
<template>
	<div class="col-12 col-lg-6 contact-input">
		<div class="content">
			<h6 class="mb-4">GET IN TOUCH</h6>
			<p>
				Integer sem velit, bibendum nec lectus sit amet, efficitur mollis
				mauris. Orci varius natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Donec nisl dui, accumsan vel aliquet nec,
				blandit in nisi.
			</p>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label"
					>Your name *</label
				>
				<input type="text" class="form-control" id="exampleFormControlInput1" />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Email *</label>
				<input
					type="email"
					class="form-control"
					id="exampleFormControlInput1"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label"
					>Subject *</label
				>
				<input
					type="email"
					class="form-control"
					id="exampleFormControlInput1"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label"
					>Your message *</label
				>
				<textarea
					class="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
				></textarea>
			</div>
			<button type="button" class="btn">SEND MESSAGE</button>
			<small>
				We always try to reply as soon as possible. Phasellus eget urna egestas,
				tincidunt augue at, posuere elit. Donec mi diam, viverra id imperdiet
				vitae, ornare nec metus.
			</small>
		</div>
	</div>
</template>
<style scoped lang="scss">
@use "../../assets/scss/partials/variables" as *;

.contact-input {
	padding-left: 45px;
	padding-right: 20px;
	.content {
		// background-color: lightskyblue;
		padding-top: 60px;
		h6 {
			font-size: 18px;
		}
		p {
			font-size: 17px;
			color: #67615a;
			line-height: 1.9;
			margin-bottom: 35px;
		}
		label {
			font-size: 17px;
			margin-bottom: 10px;
		}
		input {
			margin-bottom: 25px;
		}
		textarea {
			height: 150px;
		}

		input,
		textarea {
			font-size: 17px;
			padding: 15px 10px;
			border: 2px solid rgb(230, 226, 226);
			border-radius: 5px;
			color: #a7a098;
		}
		input:focus,
		input:hover,
		textarea:focus,
		textarea:hover {
			border-color: $main-orange;
			box-shadow: none;
			transition: 700ms;
		}
		button {
			color: #fff;
			background-color: $main-orange;
			border-radius: 0;
			font-size: 18px;
			line-height: 21px;
			font-weight: 600;
			padding: 17px 37px;
			margin: 35px 0;
		}
		button:hover {
			background-color: #e65d09;
			transition: 700ms;
		}
		small {
			display: block;
			font-size: 14px;
			color: #67615a;
		}
	}
}
</style>

<template>
	<button class="main-button rounded-2xl bg-white backdrop-blur-lg ease-in duration-200 bg-opacity-60 hover:bg-opacity-100 shadow-md">
		<slot>{{buttonText}}</slot>
	</button>
</template>

<script>
export default {
	name: "CommonButton",
	props: {
		buttonText: {
			type: String,
		}
	}
}
</script>

<style scoped>
.main-button {

}
</style>
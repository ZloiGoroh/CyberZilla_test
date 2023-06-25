<template>
	<input type="checkbox" v-model="checkboxValue" class="common-checkbox rounded-md">
</template>

<script>
export default {
	name: "CommonCheckbox",
	props: {
		value: {
			type: Boolean,
		}
	},
	computed: {
		checkboxValue: {
			get() {
				return this.value
			},
			set(val) {
				this.$emit('update:value', val)
			}
		}
	}
}
</script>

<style scoped>
.common-checkbox {
	width: 27px;
	height: 27px;
	position: relative;
	appearance: none;
	border: 1px solid #979797;
}
.common-checkbox:after {
	content: ' ';
	position: absolute;
	width: 0px;
	height: 0px;
	border-radius: 25px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: linear-gradient(292deg, #faf0cd, #fab397);
	transition-duration: 0.3s;
	transition-timing-function: cubic-bezier(0,1.57,.75,.93)
}
.common-checkbox:checked:after {
	width: 22px;
	height: 22px;
}
</style>
<template>
	<input type="text"
		v-bind="$attrs"
		v-model="inputValue"
		:class="{'invalid-value': isInputValid}"
		class="border-0"
	>
</template>

<script>
export default {
	name: "CommonInput",
	props: {
		value: {
			type: String
		},
		validator: {
			required: false
		}
	},
	computed: {
		isInputValid() {
			if (!this.validator) return true
			return this.value.match(this.validator)
		},
		inputValue: {
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
.invalid-value {

}
</style>
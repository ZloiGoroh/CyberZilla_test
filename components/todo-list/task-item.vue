<template>
	<div class="flex items-center gap-x-2">
		<common-checkbox v-model:value="checkboxValue"/>
		<div class="text-[16px]">{{task}}</div>
	</div>
</template>

<script>
import CommonCheckbox from "~/components/common-components/CommonCheckbox.vue";

export default {
	name: "task-item",
	components: {CommonCheckbox},
	props: {
		isSolved: {
			type: Boolean,
		},
		task: {
			type: String
		}
	},
	computed: {
		checkboxValue: {
			get() {return this.isSolved},
			set() {
				this.$emit('check-task')
			}
		}
	},
}
</script>

<style scoped>

</style>
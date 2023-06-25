<template>
	<div class="flex text-[20px]">
		<div class="w-1/3">
			<common-input v-model:value="name" :tabindex="getTabIndex(1)" @blur="patchUser()" placeholder="Имя"/>
		</div>
		<div class="w-1/3">
			<common-input v-model:value="phoneNumber" :tabindex="getTabIndex(2)" @blur="patchUser()" placeholder="Телефон"/>
		</div>
		<div class="w-1/3">
			<common-input v-model:value="email" :tabindex="getTabIndex(3)" @blur="patchUser()" placeholder="Email"/>
		</div>
		<div class="items-center flex w-[12px]" :class="{'cursor-pointer': hasId}" @click="deleteUser">
			<svg v-if="hasId" fill="#FF0000" width="12px" height="12px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"/>
			</svg>
		</div>
	</div>
</template>

<script>
import CommonInput from "~/components/common-components/CommonInput.vue";

export default {
	name: "user-item",
	components: {CommonInput},
	props: {
		userName: {
			type: String,
			default: ''
		},
		phone: {
			type: String,
			default: ''
		},
		userEmail: {
			type: String,
			default: ''
		},
		id: {
			type: Number,
		}
	},
	data() {
		return {
			name: '',
			phoneNumber: '',
			email: '',
		}
	},
	computed: {
		inputs() {
			return [
				{
					key: 'name',
					propKey: 'userName',
				},{
					key: 'phoneNumber',
					propKey: 'phone',
				},{
					key: 'email',
					propKey: 'userEmail',
				}
			]
		},
		hasId() {
			return typeof this.id === 'number'
		}
	},
	mounted() {
		this.setInputsFromProps()
	},
	methods: {
		setInputsFromProps() {
			this.inputs.forEach(keys => {
				this[keys.key] = this.hasId ? this[keys.propKey] : ''
			})
		},
		patchUser() {
			if (!this.name && !this.email && !this.phoneNumber && this.hasId) {
				return this.deleteUser()
			}
			let newUser = {
				name: this.name,
				email: this.email,
				phoneNumber: this.phoneNumber,
				id: this.id
			}
			this.$emit('patch-user', newUser)
			setTimeout(() => {
				this.setInputsFromProps()
			})
		},
		getTabIndex(iter) {
			return !this.hasId ? -1 : this.id * 3 + iter
		},
		deleteUser() {
			this.$emit('delete-item')
		}
	}
}
</script>

<style scoped>

</style>
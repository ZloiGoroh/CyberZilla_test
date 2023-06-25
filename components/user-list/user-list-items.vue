<template>
	<div class="p-6 rounded-lg bg-white shadow-md flex flex-col w-1/2 gap-y-6">
		<user-item
			v-for="user in users"
			:key="user.id"
			:phone="user.phoneNumber"
			:user-email="user.email"
			:user-name="user.name"
			:id="user.id"
			@patch-user="patchUser"
			@delete-item="removeUser(user)"
		/>
		<user-item
			@patch-user="patchUser"
		/>
	</div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useUserListStore} from "~/store";
import UserItem from "~/components/user-list/user-item.vue";
export default {
	name: "user-list-items",
	components: {UserItem},
	computed: {
		...mapState(useUserListStore, ['users']),
	},
	methods: {
		...mapActions(useUserListStore, ['updateUser', 'addUser', 'removeUser']),
		patchUser(val) {
			if (typeof val.id === 'number') {
				this.updateUser(val)
			} else if (Object.values(val).some(input => !!input)) {
				this.addUser(val)
			}
		}
	}
}
</script>

<style scoped>

</style>
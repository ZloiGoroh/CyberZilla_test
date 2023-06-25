<template>
	<div class="pages-router flex justify-center w-full py-5">
		<div class="w-1/2 flex justify-between">
			<nuxt-link to="/user-list">
				<CommonButton class="text-4xl px-10 py-5" :class="{'bg-opacity-100': isCurrentPage('user-list')}">
					Пользователи
				</CommonButton>
			</nuxt-link>
			<nuxt-link to="/payments">
				<CommonButton class="text-4xl px-10 py-5" :class="{'bg-opacity-100': isCurrentPage('payments')}">
					Платежи
				</CommonButton>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import CommonButton from "~/components/common-components/CommonButton.vue";

export default {
	name: "pages-router",
	components: {CommonButton},
	methods: {
		isCurrentPage(pageName) {
			return this.$route.name === pageName
		}
	}
}
</script>

<style scoped>

</style>
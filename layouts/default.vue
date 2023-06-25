<template>
  <div>
		<pages-router/>
    <slot />
  </div>
</template>
<script>
import PagesRouter from "~/components/pages-router.vue";
export default {
	components: {PagesRouter}
}
</script>
<style scoped></style>

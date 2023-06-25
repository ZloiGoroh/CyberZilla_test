<template>
	<div class="p-6 rounded-lg bg-white shadow-md flex flex-col w-1/2 gap-y-6">
		<task-item
			v-for="task in todo"
			:is-solved="task.solved"
			:task="task.task"
			@check-task="checkTask(task.id)"
		/>
		<div class="flex items-center gap-x-2">
			<common-checkbox :value="false"/>
			<common-input class="new-task-input rounded-md" @blur="createTask" v-model:value="newTask" />
		</div>
	</div>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {useTodoListStoreStore} from "~/store";
import TaskItem from "~/components/todo-list/task-item.vue";
import CommonCheckbox from "~/components/common-components/CommonCheckbox.vue";
import CommonInput from "~/components/common-components/CommonInput.vue";

export default {
	name: "todo-list",
	components: {CommonInput, CommonCheckbox, TaskItem},
	computed: {
		...mapState(useTodoListStoreStore, ['todo']),
	},
	data() {
		return {
			newTask: '',
		}
	},
	methods: {
		...mapActions(useTodoListStoreStore, ['solveTask', 'addTask']),
		checkTask(taskId) {
			this.solveTask(taskId)
		},
		createTask() {
			if (this.newTask) {
				this.addTask(this.newTask)
				this.newTask = ''
			}
		}
	}
}
</script>

<style scoped>
.new-task-input {
	border: 1px solid #979797;
}
</style>
export default {
    addTask(task) {
        this.todo.push({
            task,
            id: this.getHighestId + 1,
            solved: false
        })
    },
    solveTask(taskId) {
        console.log(taskId)
        this.todo = this.todo.map(task => {
            if (task.id === taskId) return Object.assign({}, task, {solved: !task.solved})
            return task
        })
    }
}
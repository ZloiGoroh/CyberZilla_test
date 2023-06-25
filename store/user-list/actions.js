export default {
    addUser (newUser) {
        // console.log(newUser)
        this.users.push(Object.assign({}, newUser, {id: this.getBiggestId + 1}))
    },
    removeUser (deletedUser) {
        this.users = this.users.filter(user => user.id !== deletedUser.id)
    },
    updateUser (updatedUser) {
        this.users = this.users.map(user => {
            if (updatedUser.id === user.id) return updatedUser
            return user
        })
    }
}
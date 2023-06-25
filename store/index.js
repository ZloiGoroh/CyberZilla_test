import { defineStore } from 'pinia'
import userListStore from './user-list'
import todoListStore from './todo-list'

export const useUserListStore = defineStore('userList', userListStore)
export const useTodoListStoreStore = defineStore('todoList', todoListStore)
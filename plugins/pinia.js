import {useTodoListStoreStore, useUserListStore} from '~/store'

export default defineNuxtPlugin(({ $pinia }) => {
    return {
        provide: {
            store: [useUserListStore($pinia), useTodoListStoreStore($pinia)]
        }
    }
})
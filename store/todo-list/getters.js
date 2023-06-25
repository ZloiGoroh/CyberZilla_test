import {maximumSearchReduceCallback} from "~/helpers/maximumSearchReduceCallback";

export default {
    getHighestId() {
        return this.todo.reduce(maximumSearchReduceCallback, -1)
    }
}
import {maximumSearchReduceCallback} from "~/helpers/maximumSearchReduceCallback";

export default {
    getBiggestId() {
        return this.users.reduce(maximumSearchReduceCallback, -1)
    }
}
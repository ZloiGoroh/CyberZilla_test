export const maximumSearchReduceCallback = (max, item) => {
    if (item.id > max) return item.id
    return max
}
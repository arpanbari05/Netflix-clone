export const filterDuplicate = (list) => {
    return Array.from(new Set(list.map(a => a.title)))
    .map(title => {
        return list.find(a => a.title === title)
    })
}
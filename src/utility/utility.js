export const updateObject = (state, updatedProps) => {
    return {
        ...state,
        ...updatedProps
    }
}
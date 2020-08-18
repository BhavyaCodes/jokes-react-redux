export const formSubmit = (formData) => {
    return {
        type: 'FORM',
        payload: formData
    }
}

export const selectCategory = (categories) => {
    return{
        type: 'CATEGORIES',
        payload: categories
    }
}
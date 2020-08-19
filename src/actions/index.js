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

export const selectFlags = (flags)=>{
    return {
        type: 'FLAGS',
        payload: flags
    }
}

export const searchTerm = (term) => {
    return{
        type: 'SEARCH',
        payload: term
    }
}
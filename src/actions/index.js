import jokesApi from '../api/jokesApi'

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

export const getJokes = () => async (dispatch, getState) => {
    console.log(getState)
    try {
        const response =  await jokesApi.get('/Any?amount=5')
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}
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
    // console.log(getState)
    const {categories, flags, search} = getState()
    console.log(categories)
    console.log(flags)
    console.log(search)

    let categoryString = ''
    let flagString = ''

    if (categories.all){
        categoryString = 'any'
    } else {
        
        for (const prop in categories){
            if(categories[prop]){
                categoryString += prop.toString() +','
            }
        }
        categoryString = categoryString.slice(0,-1)
    }

    for (const prop in flags){
        if(flags[prop]){
            flagString += prop.toString() +','
        }
    }
    flagString = flagString.slice(0,-1)

    console.log(categoryString)
    console.log(flagString)
    try {
        const response =  await jokesApi.get(`/${categoryString}?amount=5`,{
            params: {
                blacklistFlags: flagString,
                contains: search
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}
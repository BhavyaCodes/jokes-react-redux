import {combineReducers} from 'redux'

const formReducer = (state=[], action) => {
    switch(action.type){
        case 'FORM':{
            // console.log(action.payload)
            return action.payload
        }
        default:{
            return state
        }
    }
}
const initialCategoryState = {all:true, programming: false, misc: false, pun: false, dark: false}
const categoryReducer = (state=initialCategoryState, action) => {
    switch(action.type){
        case 'CATEGORIES':{
            // console.log(action.payload)
            return {...state, ...(action.payload)}
        }
        default:{
            return state
        }
    }
}

const flagsReducer = (state={
    nsfw: false,
    religious: false,
    political: false,
    racist: false,
    sexist: false
}, action) => {
    switch(action.type){
        case 'FLAGS':{
            return {...state, ...(action.payload)}
        }
        default:{
            return state
        }
    }
}

const searchReducer = (state='', action) => {
    switch (action.type){
        case 'SEARCH':{
            return action.payload
        }
        default:{
            return state
        }
    }
}

export default combineReducers({
    formReducer,
    categories: categoryReducer,
    flags: flagsReducer,
    search: searchReducer
})
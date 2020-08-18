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
const initialCategoryState = {programming: false, misc: false, pun: false, dark: false}
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

export default combineReducers({
    formReducer,
    categories: categoryReducer
})
import {combineReducers} from 'redux'

const formReducer = (state=[], action) => {
    switch(action.type){
        case 'FORM':{
            console.log(action.payload)
            return action.payload
        }
        default:{
            return state
        }
    }
}

export default combineReducers({
    formReducer
})
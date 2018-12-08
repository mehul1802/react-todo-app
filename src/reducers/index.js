import { combineReducers } from 'redux';
import  PostReducer  from './PostReducer';
import { reducer as formReducer } from 'redux-form'

console.log("Inside Main Reducer:"+ PostReducer);   
const rootReducer = combineReducers({
    posts : PostReducer,
    form: formReducer
});

export default rootReducer;

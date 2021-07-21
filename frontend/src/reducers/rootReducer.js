import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { imageReducer } from './imageReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    image: imageReducer
})
import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { imageReducer } from './imageReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    image: imageReducer,
    ui: uiReducer
})
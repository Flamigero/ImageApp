import { types } from "../types/types";

const initialState = {
    checking: true,
    //uid: null,
    //username: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        
            case types.authLogout:
                return {
                    checking: false
                }

        default:
            return state;
    }
}
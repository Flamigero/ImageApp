import { types } from "../types/types";

const initialState = {
    images: []
}

export const imageReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.imageLoad:
            return {
                images: action.payload
            }

        case types.imageClear:
            return initialState

        case types.imageNew:
            return {
                images: [action.payload, ...state.images]
            }
    
        default:
            return state;
    }
}
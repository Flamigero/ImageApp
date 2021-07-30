import { types } from "../types/types";

const initalState = {
    modal: false
}

export const uiReducer = (state=initalState, action) => {
    switch (action.type) {
        case types.uiModalOpen:
            return {
                ...state,
                modal: true
            }

        case types.uiModalClose:
            return {
                ...state,
                modal: false
            }
    
        default:
            return state;
    }
}
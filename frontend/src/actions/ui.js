import { types } from "../types/types";

export const openModal = () => ({
    type: types.uiModalOpen
})

export const closeModal = () => ({
    type: types.uiModalClose
})
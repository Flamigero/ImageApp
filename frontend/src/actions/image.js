import { types } from "../types/types";

export const imageLoad = (images) => ({
    type: types.imageLoad,
    payload: images
})

export const imageClear = () => ({
    type: types.imageClear
})
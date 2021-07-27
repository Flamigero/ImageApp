import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLoad = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('posts/');
        const body = await resp.json();

        if(resp.status === 200)
        {
            dispatch(imageLoad(body));
        }
        else
        {
            Swal.fire('Error', 'Authentication error', 'error')
        }
    }
}

export const imageLoad = (images) => ({
    type: types.imageLoad,
    payload: images
})

export const imageClear = () => ({
    type: types.imageClear
})
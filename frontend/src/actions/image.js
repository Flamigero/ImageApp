import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLoad = (uid = null) => {
    return async(dispatch) => {
        let url = 'posts/'
        if(uid) url = `posts/${uid}`
        const resp = await fetchConToken(url);
        const body = await resp.json();

        if(resp.status === 200)
        {
            dispatch(imageLoad(body));
        }
        else if (resp.status === 404)
        {
            dispatch(imageClear());
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
import Swal from "sweetalert2";
import { fetchConToken, fetchFormDataToken } from "../helpers/fetch";
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

export const startAdd = (user_id, photo, description) => {
    return async(dispatch) => {
        const resp = await fetchFormDataToken('posts/', {user_id, photo, description}, 'POST');
        const body = await resp.json();

        if(resp.status === 201)
        {
            dispatch(imageAdd(body));
        }
        else
        {
            console.log(resp);
            Swal.fire('Error', 'Create error', 'error')
        }
    }
}

export const imageAdd = (image) => ({
    type: types.imageNew,
    payload: image
})
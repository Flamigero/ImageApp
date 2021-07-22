import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const startLogin = (email, password) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('users/login/', {email, password}, 'POST');
        const body = await resp.json();

        if(resp.status === 200)
        {
            const {pk:uid} = body.user;
            delete body.user.pk;
            body.user['uid'] = uid;

            localStorage.setItem('token', body.token)
            dispatch(login(body.user))
        }
        else
        {
            Swal.fire('Error', 'Authentication error', 'error')
        }
    }
}

export const startRegister = (name, username, email, password, password2) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('users/signup/', {name, username, email, password, password2}, 'POST');
        const body = await resp.json();

        if(resp.status === 200)
        {
            const {pk:uid} = body.user;
            delete body.user.pk;
            body.user['uid'] = uid;

            localStorage.setItem('token', body.token)
            dispatch(login(body.user))
        }
        else
        {
            if(body.email)
                Swal.fire('Error', 'Invalid email', 'error')
            else
                Swal.fire('Error', 'Authentication error', 'error');
        }
    }
}

export const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const logout = () => ({
    type: types.authLogout
})
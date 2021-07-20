import { types } from "../types/types";

export const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const logout = () => ({
    type: types.authLogout
})
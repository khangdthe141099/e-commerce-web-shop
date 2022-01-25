import {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure
} from './user/userSlice'
import {
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFailure
} from './product/productSlice'
import { publicRequest } from '../axios/requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try {
        const res = await publicRequest.post('/login', user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart())

    try {
        const res = await publicRequest.post('/register', user)

        dispatch(registerSuccess(res.data))
    } catch (err) {
        dispatch(registerFailure())
    }
}

export const fetchProduct = async (dispatch) => {
    dispatch(fetchProductStart())

    try {
        setTimeout(() => {
            dispatch(fetchProductSuccess())
        }, 1500)
    } catch (err) {
        dispatch(fetchProductFailure())
    }
}
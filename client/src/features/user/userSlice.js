import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        logoutSuccess: (state) => {
            state.currentUser = null
            state.error = false
        },
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        registerFailure: (state) => {
            state.isFetching = false
            state.error = true
        }

    }
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    registerStart,
    registerSuccess,
    registerFailure
} = userSlice.actions
export default userSlice.reducer

export const getUser = state => state.user
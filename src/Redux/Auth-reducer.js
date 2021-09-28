import {authAPI, securityAPI} from "../API/API";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha, setSubmitting, setFieldError, setStatus) => async (dispatch) => {
    debugger
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        setStatus(response.data.messages)
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;
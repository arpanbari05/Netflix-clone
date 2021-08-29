import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authUserInit = () => {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('localId');
    return {
        type: actionTypes.AUTH_USER_INIT
    }
}

const authUserSuccess = (refreshToken, localId) => {
    return {
        type: actionTypes.AUTH_USER_SUCCESS,
        refreshToken: refreshToken,
        localId: localId
    }
}

const authUserFail = (error) => {
    return {
        type: actionTypes.AUTH_USER_FAIL,
        error: error
    }
}

const authUserBegin = () => {
    return {
        type: actionTypes.AUTH_USER_BEGIN
    }
}

export const authUser = (url, authData) => {
    return dispatch => {
        dispatch(authUserInit());
        dispatch(authUserBegin());
        axios.post(url, { email: authData.email, password: authData.password, returnSecureToken: true })
            .then(response => {
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('localId', response.data.localId);
                dispatch(authUserSuccess(response.data.refreshToken, response.data.localId));
            })
            .catch(error => {
                dispatch(authUserFail(error.response.data.error.message));
            })
    }
}

export const authUserStart = () => {
    return dispatch => {
        const refreshToken = localStorage.getItem('refreshToken');
        const localId = localStorage.getItem('localId');
        if (!refreshToken) {
            dispatch(authUserInit());
        } else {
            dispatch(authUserSuccess(refreshToken, localId));
        }
    }
}
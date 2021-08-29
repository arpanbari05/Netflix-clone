import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    refreshToken: null,
    localId: null,
    error: null,
    isAuthenticated: false,
    loading: false
}

const reducer = (state = initialState, action) => {
    let updatedProps;
    switch (action.type) {
        case actionTypes.AUTH_USER_INIT:
            updatedProps = {
                refreshToken: null,
                localId: null,
                error: null,
                isAuthenticated: false,
                loading: false
            }
            return updateObject(state, updatedProps)
        case actionTypes.AUTH_USER_BEGIN:
            updatedProps = {
                loading: true,
                isAuthenticated: false
            }
            return updateObject(state, updatedProps);
        case actionTypes.AUTH_USER_SUCCESS:
            updatedProps = {
                refreshToken: action.refreshToken,
                localId: action.localId,
                error: null,
                isAuthenticated: true,
                loading: false
            }
            return updateObject(state, updatedProps)
        case actionTypes.AUTH_USER_FAIL:
            updatedProps = {
                error: action.error,
                isAuthenticated: false,
                loading: false
            }
            return updateObject(state, updatedProps);
        default: return state;
    }
}

export default reducer;
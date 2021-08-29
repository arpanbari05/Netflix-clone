import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';
const initialState = {
    searchQuery: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_MOVIES:
            return updateObject(state, { searchQuery: action.event.target.value });
        case actionTypes.SEARCH_MOVIES_INIT:
            return updateObject(state, { searchQuery: '' })
        default: return state;
    }
}

export default reducer;
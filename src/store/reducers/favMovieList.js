import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';
import { filterDuplicate } from '../../Abstract/Abstract';

const initialState = {
    movies: [],
    addLoading: false,
    fetchLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MOVIE_START:
            return updateObject(state, { addLoading: true, error: null });
        case actionTypes.ADD_MOVIE_SUCCESSS:
            return updateObject(state, { addLoading: false, error: null });
        case actionTypes.ADD_MOVIE_FAIL:
            return updateObject(state, { addLoading: false, error: action.error });
        case actionTypes.FETCH_FAV_MOVIES_START:
            return updateObject(state, { fetchLoading: true, error: null });
        case actionTypes.FETCH_FAV_MOVIES_SUCCESS:
            const movies = [];
            for (let movie in action.movies) {
                movies.push({
                    id: movie,
                    ...action.movies[movie]
                })
            }
            return updateObject(state, { movies: filterDuplicate(movies), fetchLoading: false, error: null });
        case actionTypes.FETCH_FAV_MOVIES_FAIL:
            return updateObject(state, { fetchLoading: false, error: action.error });
        default: return state;
    }
}

export default reducer;
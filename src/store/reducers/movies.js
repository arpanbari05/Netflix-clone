import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';
import { filterDuplicate } from '../../Abstract/Abstract';

const initialState = {
    title: '',
    overview: '',
    rating: '',
    language: '',
    posterPath: '',
    backdropPath: '',
    isFavorite: false,
    allMovies: [],
    popular: [],
    topRated: [],
    nowPlaying: [],
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    let updatedProps;
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_START:
            return updateObject(state, { loading: true });
        case actionTypes.FETCH_MOVIES_SUCCESS:
            switch (action.subType) {
                case actionTypes.FETCH_POPULAR:

                    updatedProps = {
                        loading: false,
                        popular: action.movies,
                        allMovies: filterDuplicate(state.allMovies.concat(action.movies)),
                        error: null
                    }
                    return updateObject(state, updatedProps);
                case actionTypes.FETCH_NOW_PLAYING:
                    updatedProps = {
                        loading: false,
                        nowPlaying: action.movies,
                        allMovies: filterDuplicate(state.allMovies.concat(action.movies)),
                        error: null
                    }
                    return updateObject(state, updatedProps);
                case actionTypes.FETCH_TOP_RATED:
                    updatedProps = {
                        loading: false,
                        topRated: action.movies,
                        allMovies: filterDuplicate(state.allMovies.concat(action.movies)),
                        error: null
                    }
                    return updateObject(state, updatedProps);
                default: return state;
            }

        case actionTypes.FETCH_MOVIES_FAIL:
            return updateObject(state, { error: action.error, loading: false });

        case actionTypes.SET_UP_MAIN_CONTENT:
            updatedProps = {
                title: action.movieData.title,
                overview: action.movieData.overview,
                rating: action.movieData.rating,
                language: action.movieData.language,
                posterPath: action.movieData.posterPath,
                backdropPath: action.movieData.backdropPath,
                isFavorite: action.movieData.isFavorite,
                loading: false
            }
            return updateObject(state, updatedProps);

        default: return state;
    }
}

export default reducer;
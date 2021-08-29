import * as actionTypes from './actionTypes';

export const searchMovies = (event) => {
    return {
        type: actionTypes.SEARCH_MOVIES,
        event: event
    }
}

export const searchMoviesInitializer = () => {
    return {
        type: actionTypes.SEARCH_MOVIES_INIT
    }
}
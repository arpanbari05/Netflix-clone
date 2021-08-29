import axios from 'axios';
import { firebase } from '../../url';
import * as actionTypes from './actionTypes';

const addMovieStart = () => {
    return {
        type: actionTypes.ADD_MOVIE_START
    }
}

const addMovieSuccess = () => {
    return {
        type: actionTypes.ADD_MOVIE_SUCCESSS
    }
}

const addMovieFail = (error) => {
    return {
        type: actionTypes.ADD_MOVIE_FAIL,
        error: error
    }
}

export const addMovieToDb = (movieData, userId, func) => {
    return dispatch => {
        const newMovieData = {
            userId: userId,
            ...movieData
        }
        dispatch(addMovieStart());
        axios.post(firebase + '/favMovies.json', newMovieData)
        .then(response => {
            console.log(response);
            func();
            dispatch(addMovieSuccess());
        })
        .catch(error => {
            dispatch(addMovieFail(error));
        })
    }
}

export const fetchFavMoviesStart = () => {
    return {
        type: actionTypes.FETCH_FAV_MOVIES_START
    }
}

const fetchFavMoviesFail = (error) => {
    return {
        type: actionTypes.FETCH_FAV_MOVIES_FAIL,
        error: error,
    }
}

const fetchFavMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_FAV_MOVIES_SUCCESS,
        movies: movies
    }
}

export const fetchFavMovies = (userId, func) => {
    return dispatch => {
        dispatch(fetchFavMoviesStart());
        const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get(firebase + '/favMovies.json?' + queryParams)
        .then(response => {
            dispatch(fetchFavMoviesSuccess(response.data));
            func();
        })
        .catch(error => {
            dispatch(fetchFavMoviesFail(error));
        })
    }
}
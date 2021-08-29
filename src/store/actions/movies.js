import * as actionTypes from './actionTypes';
import axios from 'axios';
import { imgURL } from '../../url';

export const fetchMoviesStart = () => {
    return {
        type: actionTypes.FETCH_MOVIES_START
    }
}

const fetchMoviesSuccess = (movies, subType) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        subType: subType,
        movies: movies
    }
}

const fetchMoviesFail = (error) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAIL,
        error: error
    }
}

const filterMoviesProps = (movies) => {
    return movies.map(movie => {
        return {
            title: movie.title,
            overview: movie.overview,
            rating: movie.vote_average,
            language: movie.original_language,
            posterPath: imgURL + movie.poster_path,
            backdropPath: imgURL + movie.backdrop_path,
            isFavorite: false
        }
    })
}

export const fetchMovies = (url, subType, func) => {
    return dispatch => {
        axios.get(url)
            .then(response => {
                const movies = filterMoviesProps(response.data.results);
                dispatch(fetchMoviesSuccess(movies, subType));
                func(movies[0].title, movies[0]);
            })
            .catch(error => {
                dispatch(fetchMoviesFail(error))
            })
    }
}

export const setUpMainContent = (movieData) => {
    return {
        type: actionTypes.SET_UP_MAIN_CONTENT,
        movieData: movieData
    }
}

export const onClickChangeHanlder = (movieData) => {
    return dispatch => {
        dispatch(setUpMainContent(movieData));
    }
}
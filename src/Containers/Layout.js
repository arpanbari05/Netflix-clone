import React, { Component } from 'react';
import classes from './Layout.css';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import MainContent from '../Components/MainContent/MainContent';
import SpecialMovies from '../Components/SpecialMovies/SpecialMovies';

class Layout extends Component {

    componentDidMount() {
        const movie = {
            userId: this.props.userId,
            title: this.props.title,
            overview: this.props.overview,
            rating: this.props.rating,
            language: this.props.language,
            posterPath: this.props.posterPath,
            backdropPath: this.props.backdropPath
        }
        window.scrollTo(0, 0);
        
        if (movie.title !== '') {
            this.props.fetchFavMovies(this.localId, () => this.updateMovie(this.props.title, movie));
        }
    }

    localId = localStorage.getItem('localId');

    onClickMyList = (movieData) => {
        this.props.fetchFavMoviesStart();
        this.props.addMovieToList(movieData, this.localId, () => {
            this.props.fetchFavMovies(this.localId, () => this.updateMovie(this.props.title, movieData))
        });
    }

    updateMovie = (title, fallBackMovie) => {
        let movieData = fallBackMovie;
        this.props.favMovies.map(movie => {
            if (movie.title === title) {
                movieData = {
                    ...movie,
                    isFavorite: true
                }
            }
            return null;
        })
        this.props.setUpMainContent(movieData);
    }

    render() {

        const movieData = {
            userId: this.props.userId,
            title: this.props.title,
            overview: this.props.overview,
            rating: this.props.rating,
            language: this.props.language,
            posterPath: this.props.posterPath,
            backdropPath: this.props.backdropPath,
        };

        const layoutStyle = {
            backgroundImage: `linear-gradient(to right, rgba(34, 31, 31, 1) 0 30%, rgba(34, 31, 31, .45)), url(${this.props.backdropPath})`,
        }

        return (
            <div style={layoutStyle}
                className={classes.Layout}
                id={'home-page'}>
                <MainContent title={this.props.title}
                    overview={this.props.overview}
                    backdropPath={this.props.backdropPath}
                    posterPath={this.props.posterPath}
                    clicked={() => this.onClickMyList(movieData)}
                    loading={this.props.addLoading}
                    isAuthenticated={this.props.isAuthenticated}
                    filled={this.props.filled}
                    isFavorite={this.props.isFavorite}
                />
                <SpecialMovies heading={this.props.heading}
                    clicked={(title, fallBackMovie) => this.props.fetchFavMovies(this.localId, () => this.updateMovie(title, fallBackMovie))}
                    movies={this.props.movies} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favMovies: state.favMovieList.movies,
        error: state.movie.error,
        title: state.movie.title,
        overview: state.movie.overview,
        rating: state.movie.rating,
        language: state.movie.language,
        posterPath: state.movie.posterPath,
        backdropPath: state.movie.backdropPath,
        isFavorite: state.movie.isFavorite,
        searchQuery: state.searchMovies.searchQuery,
        addLoading: state.favMovieList.addLoading,
        userId: state.auth.localId,
        isAuthenticated: state.auth.isAuthenticated,
        favList: state.favMovieList.movies
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setUpMainContent: (movieData) => dispatch(actions.setUpMainContent(movieData)),
        addMovieToList: (movieData, userId, func) => dispatch(actions.addMovieToDb(movieData, userId, func)),
        fetchMovies: (url) => dispatch(actions.fetchMovies(url)),
        fetchFavMoviesStart: () => dispatch(actions.fetchFavMoviesStart()),
        fetchFavMovies: (localId, func) => dispatch(actions.fetchFavMovies(localId, func))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

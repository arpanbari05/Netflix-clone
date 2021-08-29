import React, { Component } from 'react';
import SpecialMovies from '../SpecialMovies/SpecialMovies';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import BoxLoader from '../BoxLoader/BoxLoader';
import classes from './MyList.css';
import { Redirect } from 'react-router';
import axios from 'axios';
import { firebase } from '../../url';

class MyList extends Component {

    state = {
        redirect: false
    }

    userId = localStorage.getItem('localId');

    componentDidMount() {
        this.props.fetchFavMovies(this.userId);
    }

    updateMovie = (title, fallBackMovie) => {
        let movieData = fallBackMovie;
        this.props.favList.map(movie => {
            if (movie.title === title) {
                console.log('true')
                movieData = {
                    ...movie,
                    isFavorite: false
                }
            }
            return null;
        })
        this.props.setUpMainContent(movieData);
    }

    onIconClick = (event, id, title, fallBackMovie) => {
        event.stopPropagation();
        axios.delete(firebase + '/favMovies/' + id + '.json')
        .then(res => {
            this.props.fetchFavMovies(this.userId);
            this.updateMovie(title, fallBackMovie);
        })
        .catch(err => console.log(err));
    }

    onClick = (title, movieData) => {
        this.props.setUpMainContent(movieData);
        this.setState({ redirect: true });
    }

    render() {

        // list of movies to render
        let favList = (
            <SpecialMovies
                showRemoveIcon={true}
                clicked={(title, movieData) => this.onClick(title,movieData)}
                movies={this.props.favList}
                heading={'My List'}
                iconClicked={(event, id, title, fallBackMovie) => this.onIconClick(event, id, title, fallBackMovie)} />
        );

        // displaying the message for no movies in fav list
        if (this.props.favList.length <= 0) {
            favList = <h1 style={{
                color: '#fff',
                fontSize: '2rem'
            }}>No movie found in your list! Add some</h1>
        }

        // displaying the spinner if data is not yet retrieved from backend
        if (this.props.loading) {
            favList = <BoxLoader />
        }

        // redirecting
        let redirect = this.state.redirect ? <Redirect to='/fav-list' /> : null;
        // return statement
        return (
            <div className={classes.MyList}>
                {redirect}
                {favList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.movie.title,
        favList: state.favMovieList.movies,
        loading: state.favMovieList.fetchLoading,
        error: state.favMovieList.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUpMainContent: (movieData) => dispatch(action.setUpMainContent(movieData)),
        fetchFavMovies: (userId) => dispatch(action.fetchFavMovies(userId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
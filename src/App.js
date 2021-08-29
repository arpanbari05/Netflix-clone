import React, { Component } from 'react';
import classes from './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import MyList from './Components/MyList/MyList';
import { connect } from 'react-redux';
import SearchMovieItems from './Components/SearchMovie/SearchMovieItems';
import * as actions from './store/actions/index';
import * as actionTypes from './store/actions/actionTypes';
import Auth from './Containers/Auth/Auth';
import HomeLoader from './Components/BoxLoader/HomeLoader/HomeLoader';
import { nowPlaying, popular, topRated } from './url';
import SideBar from './Components/NavigationBar/SideBar/SideBar';
import Backdrop from './Components/Backdrop/Backdrop';
import lazyLoading from './Components/hoc/lazyLoading';

const FavList = lazyLoading(() => import('./Containers/FavList/FavList'));
const Logout = lazyLoading(() => import('./Containers/Logout/Logout'));
const Popular = lazyLoading(() => import('./Containers/Popular/Popular'));
const TopRated = lazyLoading(() => import('./Containers/TopRated/TopRated'));
const NowPlaying = lazyLoading(() => import('./Containers/NowPlaying/NowPlaying'));

class App extends Component {

    localId = localStorage.getItem('localId');

    state = {
        show: false
    }

    toggleSideBar = () => {
        this.setState({ show: !this.state.show });
    }

    componentDidMount() {
        this.props.fetchMoviesStart();
        this.props.authUserStart();
        this.fetchAllMovies();
    }

    fetchAllMovies = () => {
        this.props.fetchMovies(nowPlaying, actionTypes.FETCH_NOW_PLAYING, (title, fallBackMovie) => this.setUpContent(title, fallBackMovie));
        this.props.fetchMovies(topRated, actionTypes.FETCH_TOP_RATED, (title, fallBackMovie) => this.setUpContent(title, fallBackMovie));
        this.props.fetchMovies(popular, actionTypes.FETCH_POPULAR, (title, fallBackMovie) => this.setUpContent(title, fallBackMovie));
    }

    setUpContent = (title, fallBackMovie) => {
        this.props.fetchFavMovies(this.localId, () => this.updateMovie(title, fallBackMovie))
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
        
        let app = null;
        if (this.props.loading) {
            app = <HomeLoader />
        }
        
        let route = this.props.isAuthenticated ? (<Route path='/my-list' exact component={MyList} />) : null;

        return (
            <div className={classes.App}>
                {app}
                <NavigationBar toggleSideBar={this.toggleSideBar} />
                <Backdrop toggleSideBar={this.toggleSideBar} show={this.state.show} />
                <SideBar toggleSideBar={this.toggleSideBar} show={this.state.show} />
                <SearchMovieItems
                    clicked={(title, fallBackMovie) => this.setUpContent(title, fallBackMovie)}
                    movies={this.props.allMovies}
                    searchQuery={this.props.searchQuery} />
                <Switch>
                    {route}
                    <Route path='/logout' exact component={Logout} />
                    <Route path='/fav-list' exact component={FavList} />
                    <Route path='/top-rated' exact component={TopRated} />
                    <Route path='/now-playing' exact component={NowPlaying} />
                    <Route path='/' component={Popular} />
                </Switch>
                <Route path='/auth' component={Auth} />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        favMovies: state.favMovieList.movies,
        allMovies: state.movie.allMovies,
        loading: state.movie.loading,
        searchQuery: state.searchMovies.searchQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUpMainContent: (movieData) => dispatch(actions.setUpMainContent(movieData)),
        authUserStart: () => dispatch(actions.authUserStart()),
        fetchMoviesStart: () => dispatch(actions.fetchMoviesStart()),
        fetchMovies: (url, subType, func) => dispatch(actions.fetchMovies(url, subType, func)),
        fetchFavMovies: (userId, func) => dispatch(actions.fetchFavMovies(userId, func))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
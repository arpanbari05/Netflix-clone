import React, { Component } from 'react';
import Layout from '../Layout';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class FavList extends Component {

    render() {
        return (
            <Layout filled={true} heading={'My List'} movies={this.props.movies} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.favMovieList.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (url) => dispatch(actions.fetchMovies(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
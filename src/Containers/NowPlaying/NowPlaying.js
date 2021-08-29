import React, { Component } from 'react';
import Layout from '../Layout';
import { connect } from 'react-redux';

class NowPlaying extends Component {

    render() {
        return (
            <Layout 
            heading={'Now Playing'} 
            movies={this.props.movies} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.nowPlaying,
    }
}

export default connect(mapStateToProps)(NowPlaying);
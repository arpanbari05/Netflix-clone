import React, { Component } from 'react';
import Layout from '../Layout';
import { connect } from 'react-redux';

class TopRated extends Component {

    render() {
        return (
            <Layout 
            heading={'Top Rated'} 
            movies={this.props.movies} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.topRated
    }
}

export default connect(mapStateToProps)(TopRated);
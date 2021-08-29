import React, { Component } from 'react';
import Layout from '../Layout';
import { connect } from 'react-redux';

class Popular extends Component {

    render() {
        return (
            <Layout 
            heading={'Popular'} 
            movies={this.props.movies} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.popular,
    }
}


export default connect(mapStateToProps)(Popular);
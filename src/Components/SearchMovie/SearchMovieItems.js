import React from 'react';
import classes from './SearchMovieItems.css';
import SearchMovieItem from './SearchMovieItem/SearchMovieItem';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const SearchMovieItems = (props) => {

    let movies = props.movies.filter(movie => {
        if (props.searchQuery === '') return false;
        else return movie.title.toLowerCase().includes(props.searchQuery.toLowerCase());
      })
        .map(movieItem => {
          return (
            <SearchMovieItem key={movieItem.title}
            clicked={() => props.clicked(movieItem.title, movieItem)}
            posterPath={movieItem.posterPath}
            title={movieItem.title} />
          )
        })

    return (
        <div className={classes.SearchMovieItems}
        onClick={props.searchMoviesInitializer}>
            {movies}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setUpMainContent: (movieData) => dispatch(actions.setUpMainContent(movieData)),
        searchMoviesInitializer: () => dispatch(actions.searchMoviesInitializer())
    }
}
export default connect(null, mapDispatchToProps)(SearchMovieItems);
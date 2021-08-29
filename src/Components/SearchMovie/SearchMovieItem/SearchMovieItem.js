import React from 'react';
import classes from './SearchMovieItem.css';

const SearchMovieItem = (props) => {
    return (
        <div className={classes.SearchMovieItem}
        onClick={props.clicked}>
            <img src={props.posterPath} alt='poster' />
            <p>{props.title}</p>
        </div>
    )
}

export default SearchMovieItem;
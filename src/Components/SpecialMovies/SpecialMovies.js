import React from 'react';
import SpecialMovie from './SpecialMovie/SpecialMovie';
import classes from './SpecialMovies.css';

const SpecialMovies = (props) => {
    let movies = props.movies.map(movie => {
        return (
            <SpecialMovie key={movie.title}
                clicked={() => props.clicked(movie.title, movie)}
                iconClicked={(event) => props.iconClicked(event, movie.id, movie.title, movie)}
                title={movie.title}
                overview={movie.overview}
                rating={movie.rating}
                posterPath={movie.posterPath}
                backdropPath={movie.backdropPath}
                showRemoveIcon={props.showRemoveIcon} />
        )
    })
    return (
        <div className={classes.SpecialMoviesContainer}>
            <h1>{props.heading}</h1>
            <div className={classes.SpecialMovies}>
                {movies}
            </div>
        </div>
    )
}

export default SpecialMovies;
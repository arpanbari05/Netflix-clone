import React from 'react';
import NavButton from '../Buttons/NavButton';
import Button from '../Buttons/Button/Button';
import Spinner from '../Spinner/Spinner';
import classes from './MainContent.css';
import { Picture } from 'react-responsive-picture';

const MainContent = (props) => {
    let favButton = (
        !props.filled && props.isAuthenticated ? <Button 
        isFavorite={props.isFavorite} 
        clicked={props.clicked} 
        type='cancel' /> : null
    );

    if (props.loading) {
        favButton = <Spinner />
    }

    let path = '/auth';
    if (props.isAuthenticated) { path = 'https://www.netflix.com/in/' }

    return (
        <div className={classes.MainContent}>
            <Picture
            sources={[
                {
                    srcSet: props.backdropPath,
                    media: '(max-width: 600px)'
                },
                {
                    srcSet: props.posterPath,
                    media: '(min-width: 600px)'
                }
            ]} />
            <div className={classes.Container}>
                <h1>{props.title}</h1>
                <p>{props.overview}</p>
                <div className={classes.ButtonContainer}>
                    <NavButton type='continue' path={path}>
                        {props.isAuthenticated ? 'Watch Now' : 'Sign In to Watch'}
                    </NavButton>
                    {favButton}
                </div>
            </div>
        </div>
    )
}

export default MainContent;
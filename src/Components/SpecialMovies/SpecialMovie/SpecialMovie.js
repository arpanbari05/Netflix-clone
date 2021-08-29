import React from 'react';
import classes from './SpecialMovie.css';
import iconRemove from '../../../Assets/icon_remove.png';
import { Picture } from 'react-responsive-picture';

const SpecialMovie = (props) => {

    let removeIcon = props.showRemoveIcon ? <img className={classes.Icon}
        onClick={props.iconClicked}
        src={iconRemove} alt='icon remove' /> : null;

    let removeIconMobile = props.showRemoveIcon ? <img className={classes.IconMobile}
        onClick={props.iconClicked}
        src={iconRemove} alt='icon remove' /> : null;

    return (
        <a href={'#home-page'} className={classes.SpecialMovie} onClick={props.clicked}>
            {removeIconMobile}
            <div className={classes.Details}>
                {removeIcon}
                <h4>{props.title}</h4>
                <strong>{props.rating}/10</strong>
                <p>{props.overview}</p>
            </div>
            <Picture
                sources={[
                    {
                        srcSet: props.posterPath,
                        media: '(max-width: 600px)'
                    },
                    {
                        srcSet: props.backdropPath,
                        media: '(min-width: 600px)'
                    }
                ]}
            />
        </a>
    )
}

export default SpecialMovie;
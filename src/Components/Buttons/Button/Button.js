import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    let btnClass = [classes.Continue];
    if (props.type === 'cancel') {
        btnClass = props.filled ? [classes.Cancel, classes.Fill] : [classes.Cancel];
    }
    let btnText = '+ My list';
    let disable = false;
    if (props.isFavorite) {
        disable = true;
        btnClass = [classes.isFavorite];
        btnText = 'Added to list';
    }

    return (
        <button disabled={disable}
        onClick={props.clicked}
        className={btnClass.join(' ')}>{props.children ? props.children : btnText}</button>
    )
}
export default Button;
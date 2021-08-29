import React from 'react';
import classes from './NavButton.css';

const NavButton = (props) => {
    let btnClass = classes.Continue;
    if (props.type === 'cancel') {
        btnClass = classes.Cancel;
    }
    return (
        <a href={props.path} onClick={props.clicked}
        className={btnClass}>{props.children}</a>
    )
}
export default NavButton;
import React from 'react';
import classes from './SideBarToggler.css';

const SideBarToggler = (props) => {
    return (
        <div className={classes.SideBarToggler} onClick={props.toggleSideBar}>
            <div />
            <div />
            <div />
        </div>
    );
}

export default SideBarToggler;
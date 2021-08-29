import React from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
    <NavLink 
    to={props.path} 
    exact
    className={classes.NavigationItem}
    activeClassName={classes.Active}>
        {props.children}
    </NavLink>
)

export default NavigationItem;
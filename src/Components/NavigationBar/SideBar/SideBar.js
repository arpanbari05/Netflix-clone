import React from 'react';
import classes from './SideBar.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { connect } from 'react-redux';

const SideBar = (props) => {

    let sideBarClass = [classes.SideBar];
    props.show ? sideBarClass.push(classes.Open) : sideBarClass.push(classes.Close);
    // console.log(sideBarClass);
    let navItems = [
        { name: 'home', path: '/' },
        { name: 'top rated', path: '/top-rated' },
        { name: 'now playing', path: '/now-playing' }
    ];

    if (props.isAuthenticated) {
        navItems.push({ name: 'my list', path: '/my-list' });
    }

    const navigationItem = navItems.map(item => {
        return <NavigationItem key={item.name}
            path={item.path}>
            {item.name}
        </NavigationItem>
    })

    return (
        <div className={sideBarClass.join(' ')}
            onClick={props.toggleSideBar}>
            <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' alt='netflix-logo' />
            <nav>
                {navigationItem}
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(SideBar);
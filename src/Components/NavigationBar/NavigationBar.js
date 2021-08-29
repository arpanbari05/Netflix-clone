import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationBar.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Input from '../Input/Input';
import SideBarToggler from '../SideBarToggler/SideBarToggler';

const NavigationBar = (props) => {

    const navItems = [
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

    let auth = (<NavigationItem path='/auth'>Sign In</NavigationItem>);

    if (props.isAuthenticated) {
        auth = (<NavigationItem path='/logout'>Logout</NavigationItem>);
    }

    return (
        <div className={classes.NavigationBar}>
            <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' alt='netflix-logo' />
            <SideBarToggler toggleSideBar={props.toggleSideBar} />
            <nav>
                {navigationItem}
            </nav>
            <Input onChangeListener={(event) => props.searchMovies(event)}
                type={'text'}
                value={props.searchQuery}
                placeholder={'Search over 1000 movies'} />
            {auth}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        searchQuery: state.searchMovies.searchQuery,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchMovies: (event) => dispatch(actions.searchMovies(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
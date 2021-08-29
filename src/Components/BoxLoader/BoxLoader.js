import React from 'react';
import BoxItem from './BoxItem/BoxItem';
import classes from './BoxLoader.css';

const BoxLoader = () => {
    const boxItems = [];
    for(let i=0; i<20; i++) {
        boxItems.push(
            <BoxItem key={i} />
        );
    }
    return (
        <div className={classes.BoxLoader}>
            {boxItems}
        </div>
    )
}

export default BoxLoader;
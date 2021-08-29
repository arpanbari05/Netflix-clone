import React from 'react';
import classes from './BoxItem.css';

const BoxItem = () => (
    <figure className={classes.BoxItem}>
        <div className={[classes.BoxItem, classes.Loading].join(' ')}></div>
    </figure>
);

export default BoxItem;
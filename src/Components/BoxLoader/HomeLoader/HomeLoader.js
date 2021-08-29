import React from 'react';
import classes from './HomeLoader.css';
import BoxItem from '../BoxItem/BoxItem';
import BoxLoader from '../BoxLoader';

const HomeLoader = () => (
    <div className={classes.HomeLoader}>
        <div className={classes.Flex1}>
            <BoxItem />
            <div className={classes.Flex2}>
                <BoxItem />
                <div className={classes.Flex3}>
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                    <BoxItem />
                </div>
            </div>
        </div>
        <BoxLoader />
    </div>
);

export default HomeLoader;
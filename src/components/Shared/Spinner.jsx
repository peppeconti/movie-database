import React from 'react';
import classes from './Spinner.module.css';


const Spinner = () => {

    return (
        <div className={classes['lds-ring']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;






















//<div class="lds-ring"><div></div><div></div><div></div><div></div>
import React from "react";
import './Loader.css';
import {motion as m} from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x:[-20, 20],
        y:[0, -30],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: .5
            },
            y: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: .25
            }
        }
    }
}


const Loader = () => {

    return (
        <>
            <m.div className='loader'
            variants={loaderVariants}
            animate='animationOne'
            ></m.div>
        </>
    )
}

export default Loader;
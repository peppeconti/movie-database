import React from "react";
import classes from './Home.module.css';
import Search from "../Search";

const Home = () => {

    return (
        <section className={classes.home}>
            <Search setPage={false}/>
        </section>
    )
}

export default Home;
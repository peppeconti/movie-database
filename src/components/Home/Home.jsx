import React from "react";
import classes from './Home.module.css';
import Search from "../Shared/Search";

const Home = () => {

    return (
        <section className={classes.home}>
            <Search />
        </section>
    )
}

export default Home;
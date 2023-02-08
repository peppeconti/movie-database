import React, { useEffect, useState } from "react";
import classes from './Query.module.css';
import Search from "../Search";
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";

const Query = () => {

    const {currentParams} = useQuery();
    const apikey = process.env.REACT_APP_API_KEY;
    const API = `http://www.omdbapi.com/?apikey=${apikey}&s=${currentParams.s}`;

    const { data, error, loading } = useFetch(API);
    

    return (
        <section className={classes.query}>
            <div className={classes.wrapper}>
                <Search />
            </div>
            <div className={classes.result}>
                {data && <div>You found {data.totalResults} items!</div>}
                {error && <div>{error}</div>}
            </div>
        </section>
    )
}

export default Query;



/**
 * //import { useLocation } from 'react-router-dom';

/*function useQuery() {
    //const { search } = useLocation();
    const [searchParams] = useSearchParams();

    return useMemo(() => new URLSearchParams(search), [search]);
}*/
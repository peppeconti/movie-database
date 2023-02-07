import React, { useEffect, useState } from "react";
import classes from './Query.module.css';
import Search from "../Search";
import { useSearchParams } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';

/*function useQuery() {
    //const { search } = useLocation();
    const [searchParams] = useSearchParams();

    return useMemo(() => new URLSearchParams(search), [search]);
}*/

const Query = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries([...searchParams]);
    const apikey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
            fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${currentParams.s}`, {
                signal: signal
            })
            .then((data) => data.json())
            .then(data => setMovies(data.Search));
            
        //cleanup
        return () => controller.abort();

    }, [currentParams]);

    return (
        <section className={classes.query}>
            <div className={classes.wrapper}>
                <Search />
            </div>
            <div className={classes.result}>
                {movies.map(movie => <figure key={movie.imdbID}><img src={movie.Poster} alt={movie.Title} /></figure>)}
            </div>
        </section>
    )
}

export default Query;
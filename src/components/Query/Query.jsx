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

    const [movies, setMovies] = useState();
    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries([...searchParams]);
    const apikey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
            fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${currentParams.s}`, {
                signal: signal
            })
            .then(data => data.json())
            .then(data => {
                const res = {number: data.totalResults, results: data.Search.map(e => {
                    const result = {img: e.Poster, title: e.Title, id: e.imdbID};
                    return result;
                })};
                return res;
            })
            .then(data => setMovies(data.results))

        //cleanup
        return () => controller.abort();

    }, [currentParams]);

    return (
        <section className={classes.query}>
            <div className={classes.wrapper}>
                <Search />
            </div>
            <div className={classes.result}>
                {movies && movies.map(movie => <figure key={movie.id}><img src={movie.img} alt={movie.title} /></figure>)}
                {!movies && <div>No results!!</div>}
            </div>
        </section>
    )
}

export default Query;
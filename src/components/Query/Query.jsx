import { useRef, useState } from 'react';
import classes from './Query.module.css';
import Search from "../Shared/Search";
import Pagination from './Pagination';
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";

const Query = () => {

    // HOOKS
    const [page, setPage] = useState(1);
    const { queryString } = useQuery();

    const queryStr = queryString();
    const apikey = process.env.REACT_APP_API_KEY;
    const API = `http://www.omdbapi.com/?apikey=${apikey}&${queryStr}&page=${page}`;

    const { data, error, loading } = useFetch(API);

    let movies;
    let totalMovies;
    const content = useRef(<div>nullo</div>);

    if (data && data.Response === 'True') {
        movies= data.Search.map(e => {
            return { id: e.imdbID, title: e.Title, img: e.Poster }
        });
        totalMovies = data.totalResults;
        content.current = <>
            <p className={classes.number}>You found {totalMovies} items</p>
            <div className={classes.result}>
                {movies.map(movie => <figure key={movie.id}><img src={movie.img} alt={movie.title} /></figure>)}
            </div>
            <Pagination totalCount={totalMovies} currentPage={page} setPage={setPage}/>
        </>
    }

    if (data && data.Response === 'False') {
        content.current = <div>No results...sorry</div>
    }

    console.log(movies);

    return (
        <section className={classes.query}>
            <div className={classes.wrapper}>
                <Search setPage={setPage} />
            </div>
            <div className={loading ? classes.loading : classes.loaded}>
                {content.current}
            </div>
            <footer></footer>
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
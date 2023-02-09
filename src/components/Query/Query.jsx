import classes from './Query.module.css';
import Search from "../Search";
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";

const Query = () => {

    const { queryString } = useQuery();
    const apikey = process.env.REACT_APP_API_KEY;
    const API = `http://www.omdbapi.com/?apikey=${apikey}&${queryString}`;

    const { data, error, loading } = useFetch(API);

    let movies;
    let totalMovies;
    let content;

    if (data && data.Response === 'True') {
        movies = data.Search.map(e => new Object({ id: e.imdbID, title: e.Title, img: e.Poster }));
        totalMovies = data.totalResults;
        content = <>
            <p>You found {totalMovies} items</p>
            <div className={classes.result}>
                {movies.map(movie => <figure key={movie.id}><img src={movie.img} alt={movie.title} /></figure>)}
            </div>
        </>
    }

    if (data && data.Response === 'False') {
        content = <div>No results...sorry</div>
    }

    console.log(movies);

    return (
        <section className={classes.query}>
            <div className={classes.wrapper}>
                <Search />
            </div>
            <div>
                {loading && <div>Loading...</div>}
                {data && content}
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
import classes from './Results.module.css';
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";
import Pagination from './Pagination';

const Results = ({ page, setPage }) => {

    const { queryString } = useQuery();

    const queryStr = queryString();
    const apikey = process.env.REACT_APP_API_KEY;
    const API = `http://www.omdbapi.com/?apikey=${apikey}&${queryStr}&page=${page}`;

    const { data, error, loading } = useFetch(API);

    let movies;
    let totalMovies;
    let content;

    if (data && data.Response === 'True') {
        movies = data.Search.map(e => {
            return { id: e.imdbID, title: e.Title, img: e.Poster }
        });
        totalMovies = data.totalResults;
        content = <>
            <div className={classes.result}>
                {movies.map(movie => <figure key={movie.id}><img src={movie.img} alt={movie.title} /></figure>)}
            </div>
            <Pagination totalCount={totalMovies} currentPage={page} setPage={setPage} />
        </>
    }

    if (data && data.Response === 'False') {
        content = <div>No results...sorry</div>
    }

    console.log(data);

    return (
        <div className={classes.results}>
            <p className={classes.total}>You found {totalMovies} items</p>
            {content}
        </div>
    )
}

export default Results;
import classes from './Results.module.css';
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";
import Pagination from './Pagination';
import SingleItem from './SingleItem';

const Results = ({ page, setPage }) => {

    const { queryString } = useQuery();

    const queryStr = queryString();
    const apikey = process.env.REACT_APP_API_KEY;
    const API = `http://www.omdbapi.com/?apikey=${apikey}&${queryStr}&page=${page}`;

    const { data, error, loading } = useFetch(API);

    // DATA
    let movies;
    let totalMovies;

    // ELEMENTS
    let totalFound;
    let movieList;
    let pagination;

    if (data && data.Response === 'True') {
        // SET DATA RESULTS
        movies = data.Search.map(e => {
            return { id: e.imdbID, title: e.Title, img: e.Poster }
        });
        totalMovies = data.totalResults;
        // SET ELEMENTS
        totalFound = <p className={classes.total}>You found {totalMovies} items</p>
        movieList = <ul className={classes.movie_list}>
            {movies.map(movie =>
                <SingleItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    img={movie.img}
                />
            )}
        </ul>
        pagination = <Pagination totalCount={totalMovies} currentPage={page} setPage={setPage} />
    }

    if (data && data.Response === 'False') {
        totalFound = <p className={classes.total}>You found no items</p>
    }

    //console.log(data);

    return (
        <div className={classes.results}>
            {!loading && <>
                {totalFound}
                {movieList}
                {pagination}
            </>}
            {loading && <p>loading...</p>}
        </div>
    )
}

export default Results;
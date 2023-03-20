import { useRef, useState } from 'react';
import classes from './ResultsPage.module.css';
import Search from "../Shared/Search";
import Results from './Results';
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";

const ResultsPage = () => {

    // HOOKS
    const [page, setPage] = useState(1);
    const { queryString } = useQuery();

    const queryStr = queryString();
    const apikey = process.env.REACT_APP_API_KEY;
    const API = `http://www.omdbapi.com/?apikey=${apikey}&${queryStr}&page=${page}`;

    const { data, error, loading } = useFetch(API);

    console.log(data);

    return (
        <section className={classes.results__page}>
            <div className={classes.search__wrapper}>
                <Search setPage={setPage} />
            </div>
            <div className={classes.results__wrapper}>
                <p className={classes.total}></p>
                <Results data={data} page={page}/>
            </div>
        </section>
    )
}

export default ResultsPage;
import React, { useEffect, useMemo } from "react";
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

    const [searchParams] = useSearchParams();
    const apikey = process.env.REACT_API_KEY || '8bf8cde6';

    useEffect(() => {
        let mounted = true;
        const currentParams = Object.fromEntries([...searchParams]);
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
        //console.log(currentParams);
      }, [searchParams]);

    return (
        <section className={classes.query}>
            <div className={classes.wrapper}>
                <Search />
            </div>
            <div className={classes.result}></div>
        </section>
    )
}

export default Query;
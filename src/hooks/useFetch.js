//useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url, {
            signal: signal
        })
            .then(res => res.json())
            .then(res => {
               
                    setData(res);
                    setLoading(false);
                
            })
            .catch(err => {
                setLoading(false);
                setError(err);
            })

        return () => {
            //console.log('unsuscribed');
            controller.abort();
        }
    }, [url])

    return { data, loading, error }

}

export default useFetch;
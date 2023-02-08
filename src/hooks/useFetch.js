//useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading('loading...')
        setData(null);
        setError(null);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url, {
            signal: signal
        })
            .then(res => res.json())
            .then(res => {
                setLoading(false);
                setData(res);
            })
            .catch(err => {
                setLoading(false);
                setError(err);
            })

        return () => {
            console.log('aho');
            controller.abort();
        }
    }, [url])

    return { data, loading, error }

}

export default useFetch;
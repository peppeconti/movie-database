import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQuery = () => {

    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries([...searchParams]);

    const queryString = useCallback((obj) => {
        let queryParams = [];
        for (const [key, value] of Object.entries(obj || currentParams)) {
            if (value !== '') queryParams.push(`${key}=${value}`);
        };
        return queryParams.join('&');

    }, [currentParams]);

    return { queryString, currentParams };
}

export default useQuery;
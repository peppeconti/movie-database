import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQuery = () => {

    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries([...searchParams]);

    console.log(currentParams);

    const queryString = useMemo(() => {
        let queryParams = [];
        for (const [key, value] of Object.entries(currentParams)) {
            queryParams.push(`${key}=${value}`);
        };
        return queryParams.join('&');

    }, [currentParams]);

    return queryString;
}

export default useQuery;
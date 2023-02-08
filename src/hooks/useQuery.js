import { useSearchParams } from 'react-router-dom';

const useQuery = () => {

    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries([...searchParams]);
    let queryParams = [];
    for (const [key, value] of Object.entries(currentParams)) {
        queryParams.push(`${key}=${value}`);
    };
    const queryString = queryParams.join('&');

    return { queryString };
}

export default useQuery;
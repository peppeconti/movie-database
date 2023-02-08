import { useSearchParams } from 'react-router-dom';

const useQuery = () => {

    const [searchParams] = useSearchParams();
    const currentParams = Object.fromEntries([...searchParams]);
    return { currentParams };
}

export default useQuery;
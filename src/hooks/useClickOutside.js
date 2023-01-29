import { useEffect } from 'react';


const useClickOutside = (ref, callback) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        console.log('added')
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            console.log('removed');
        };
    }, [ref, callback]);
};

export default useClickOutside;
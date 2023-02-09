import { useMemo } from 'react';

const range = (start, end) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
        start value to end value.
    */
    return Array.from({ length }, (_, index) => index + start);
};

const usePagination = (totalCount, currentPage) => {

    const DOTS = '...';

    const paginationRange = useMemo(() => {

        const totalPageCount = Math.ceil(totalCount / 10);

        /* 
            Case 1: If the number of pages is less than the page numbers we want to show in our paginationComponent, we return the range [1..totalPageCount] 
        */

        if (5 >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - 1, 1);
        const rightSiblingIndex = Math.min(
            currentPage + 1,
            totalPageCount
        );

        /*
            We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        /* 
            1-based index
        */
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        /*
            Case 2: No left dots to show, but rights dots to be shown
        */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftRange = range(1, 4);

            return [...leftRange, DOTS, totalPageCount];
        };

        /*
            Case 3: No right dots to show, but left dots to be shown
        */
        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightRange = range(
                totalPageCount - 4 + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        };

        /*
            Case 4: Both left and right dots to be shown
        */
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

    }, [totalCount, currentPage]);

    return paginationRange;

};

export default usePagination;
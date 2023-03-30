import classes from './Pagination.module.css';
import usePagination from "../../hooks/usePagination";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

const Pagination = ({ totalCount, currentPage, setPage }) => {

    const pagination = usePagination(totalCount, currentPage);

    //console.log(pagination);

    const pag_items = (pageNumber) => {
        return (pageNumber === currentPage) ? [classes.pagination_item, classes.selected].join(' ') : classes.pagination_item;
    }

    const arrow_left = () => {
        return (currentPage === 1) ? [classes.pagination_item, classes.disabled].join(' ') : classes.pagination_item
    }

    const arrow_right = () => {
        return (currentPage === pagination[pagination.length - 1]) ? [classes.pagination_item, classes.disabled].join(' ') : classes.pagination_item
    }

    return (
        <ul className={classes.pagination_container}>
            {/* Left navigation arrow */}
            <li className={arrow_left()} onClick={() => setPage(prev => --prev)}>
                <div className={classes.arrow}><MdKeyboardDoubleArrowLeft /></div>
            </li>
            {pagination.map((pageNumber, i) => <li
                key={i}
                className={pag_items(pageNumber)}
                onClick={pageNumber !== '...' ? () => setPage(pageNumber) : () => console.log('nothing')}
            >
                {pageNumber}
            </li>)}
            {/*  Right Navigation arrow */}
            <li className={arrow_right()} onClick={() => setPage(prev => ++prev)}>
                <div className={classes.arrow}><MdKeyboardDoubleArrowRight/></div>
            </li>
        </ul>
    )
}

export default Pagination;
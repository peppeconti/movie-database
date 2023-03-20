import classes from './Results.module.css';
import Pagination from './Pagination';

const Results = ({data, page}) => {

    return (
        <div className={classes.results}>
            <p className={classes.total}></p>
          
        </div>
    )
}

export default Results;
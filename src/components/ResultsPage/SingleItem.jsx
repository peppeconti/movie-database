import classes from './SingleItem.module.css';
import not_found from '../../assets/img-not-found.jpg';

const SingleItem = ({ id, title, img, number, year, type }) => {

    return (
        <li className={classes.item}>
            <div className={classes.number}>
                {number}
            </div>
            <figure>
                <img src={img !== 'N/A' ? img : not_found}/>
            </figure>
            <div className={classes.title}>
                <p>{title}</p>
                <p>{year}</p>
                <p>{type}</p>

            </div>
        </li>
    )
}

export default SingleItem;
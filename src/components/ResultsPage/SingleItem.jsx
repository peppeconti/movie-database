import classes from './SingleItem.module.css';
import not_found from '../../assets/img-not-found.jpg';

const SingleItem = ({ id, title, img }) => {

    return (
        <li className={classes.item}>
            <figure>
                <img src={img !== 'N/A' ? img : not_found}/>
            </figure>
        </li>
    )
}

export default SingleItem;
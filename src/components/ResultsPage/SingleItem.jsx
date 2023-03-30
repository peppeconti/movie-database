import classes from './SingleItem.module.css';
import not_found from '../../assets/img-not-found.jpg';

const SingleItem = ({ id, title, img, number, year, type, setModal, setModalData }) => {

    const openModal = () => {
        setModalData(id);
        setModal(true);
    }

    return (
        <li className={classes.item}>
            <div className={classes.number}>
                <span>
                    {number}
                </span>
            </div>
            <figure>
                <img src={img !== 'N/A' ? img : not_found} alt={title} />
            </figure>
            <div className={classes.title}>
                <p>{title} ({type})</p>
                <p>{year}</p>
                <button onClick={openModal}>VIEW</button>
            </div>
        </li>
    )
}

export default SingleItem;
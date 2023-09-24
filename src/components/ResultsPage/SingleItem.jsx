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
                <button className={classes.plot} onClick={openModal}>PLOT</button>
            </figure>
            <div className={classes.title}>
                <p className={classes.title}>{title} ({type})</p>
                <p className={classes.year}>{year}</p>
            </div>
        </li>
    )
}

export default SingleItem;
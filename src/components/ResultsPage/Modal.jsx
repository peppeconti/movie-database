import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import useFetch from "../../hooks/useFetch";
import Spinner from '../Shared/Spinner';

const Backdrop = ({ closeModal }) => {
    return (
        <div className={classes.back} onClick={closeModal} />
    );
};

const MovieInfo = ({ data, loading }) => {

    console.log(data);

    return (
        <div className={classes.message}>
            {loading && <div className={classes.spinner}><Spinner /></div>}
            {(!loading && data) && <p>{data.Plot}</p>}
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({ setModal, modalData }) => {

    const apikey = process.env.REACT_APP_API_KEY;
    const API = `https://www.omdbapi.com/?apikey=${apikey}&i=${modalData}&plot=full`;
    const { data, error, loading } = useFetch(API);

    const closeModal = () => {
        setModal(false);
    }

    return (
        <>
            {ReactDOM.createPortal(<Backdrop closeModal={closeModal} />, portalElement)}
            {ReactDOM.createPortal(<MovieInfo data={data} loading={loading} closeModal={closeModal} />, portalElement)}
        </>
    );
};

export default Modal;
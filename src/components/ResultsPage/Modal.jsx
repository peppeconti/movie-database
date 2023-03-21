import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import useFetch from "../../hooks/useFetch";

const Backdrop = ({ closeModal }) => {
    return (
        <div className={classes.back} onClick={closeModal} />
    );
};

const MovieInfo = ({ data, loading }) => {

    console.log(data);

    return (
        <div className={classes.message}>
            {loading && <p>ciccio Load</p>}
            {(!loading && data) && <p>{data.Plot}</p>}
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({ setModal, modalData }) => {

    const apikey = process.env.REACT_APP_API_KEY;
    const API = `http://www.omdbapi.com/?apikey=${apikey}&i=${modalData}&plot=full`;
    const { data, error, loading } = useFetch(API);

    const closeModal = () => {
        setModal(false);
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop closeModal={closeModal} />, portalElement)}
            {ReactDOM.createPortal(<MovieInfo data={data} loading={loading} closeModal={closeModal} />, portalElement)}
        </Fragment>
    );
};

export default Modal;
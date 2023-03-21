import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ closeModal }) => {
    return (
        <div className={classes.back} onClick={closeModal}/>
    );
};

const Message = ({ message }) => {

    return (
        <div className={classes.message}>
            {message}
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({ setModal, message }) => {

    const closeModal = () => {
        setModal(false);
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop closeModal={closeModal}/>, portalElement)}
            {ReactDOM.createPortal(<Message message={message} closeModal={closeModal}/>, portalElement)}
        </Fragment>
    );
};

export default Modal;
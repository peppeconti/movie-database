import React, { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import './Modal.css';

const Modal = ({ setShow }) => {
    const ref = useRef();

    const close = useClickOutside(ref, setShow);
  
    return (
        <div ref={ref} className='modal'>
          <h1>Hi,I'm a modal!</h1>
        </div>
    );
};

export default Modal;
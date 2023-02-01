import React, { useState } from "react";
import  classes from './SearchForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from "formik";

const SearchForm = () => {

    const [active, setActive] = useState('');

    /*const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];*/

    const expandeInput = () => {
        //refs.forEach(e => e.current.classList.add('active'));
        setActive(classes.active);
    }
    const closeInput = () => {
        //refs.forEach(e => e.current.classList.remove('active'));
        setActive('');
    }

    const validate = values => {
        const errors = {};

        if (!values.search) {
            errors.search = 'search baar is empty'
        };
        console.log(errors.search);
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validate,
        onSubmit: values => {
            console.log(values)
        },
    });

    

    return (
        <form className={`${classes.search_box} ${active}`} onSubmit={formik.handleSubmit}>
            <input
                className={active}
                name='search'
                id='search'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.search}
                placeholder='Type and search your favourite movies by title...' />
            <button className={`${classes.search_btn} ${active}`} type="button" onClick={expandeInput}>
                <FontAwesomeIcon icon="search" />
            </button>
            <button className={`${classes.search_btn} ${classes.submit_btn} ${active}`} type="submit">
                <FontAwesomeIcon icon="search" />
            </button>
            <div className={`${classes.cancel_btn} ${active}`} type="button" onClick={closeInput}>
                <FontAwesomeIcon icon="times" />
            </div>
        </form>
    )

}

export default SearchForm;

/*
<div className='error'>{formik.errors.search}</div>

<form className={classes.form} onSubmit={formik.handleSubmit}>
            <input
                className={classes.search__bar}
                name='search'
                id='search'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.search}
                placeholder='Type and search your favourite movies by title...' />
            <button type='submit' className={classes.search__button}>
                <img src={search__icon} alt='start searching'></img>
            </button>
        </form>

*/
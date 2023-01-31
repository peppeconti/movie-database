import React, { useRef } from "react";
import  classes from './SearchForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from "formik";

const SearchForm = () => {

    const refs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const expandeInput = () => {
        refs.forEach(e => e.current.classList.add('active'));
    }
    const closeInput = () => {
        refs.forEach(e => e.current.classList.remove('active'));
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
        <form ref={refs[0]} className={`${classes.search_box} ${active}`} onSubmit={formik.handleSubmit}>
            <input ref={refs[1]}
                name='search'
                id='search'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.search}
                placeholder='Type and search your favourite movies by title...' />
            <button ref={refs[2]} className="search-btn" type="button" onClick={expandeInput}>
                <FontAwesomeIcon icon="search" />
            </button>
            <button ref={refs[3]} className="search-btn submit-btn" type="submit">
                <FontAwesomeIcon icon="search" />
            </button>
            <div ref={refs[4]} className="cancel-btn" type="button" onClick={closeInput}>
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
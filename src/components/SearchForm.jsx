import React from "react";
import classes from './SearchForm.module.css';
import search__icon from '../assets/magnifying-glass-solid.svg';
import { useFormik } from "formik";

const SearchForm = () => {

    const validate = values => {
        const errors = {};

        if (!values.search) {
            errors.search = 'search baar is empty'
        };

        return errors
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
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <div>
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
            </div>
        </form>
    )

}

export default SearchForm;

/*
<div className='error'>{formik.errors.search}</div>*/
import React from "react";
import classes from './SearchForm.module.css';
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
             <div className={classes.button__container}>
                <button type='submit'>search</button>
            </div>
            <input
                className={classes.search}
                name='search'
                id='search'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.search}
                placeholder='Type and search your favourite movies by title...' />
        </form>
    )

}

export default SearchForm;

/*
<div className='error'>{formik.errors.search}</div>*/
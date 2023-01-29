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
        <div className={classes.wrapper}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <input
                    className={classes.search}
                    name='search'
                    id='search'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.search}
                    placeholder='start your query...' />
                <div className={classes.button__container}>
                    <button type='submit'>search</button>
                </div>
            </form>
        </div>
    )

}

export default SearchForm;

/*
<div className='error'>{formik.errors.search}</div>*/
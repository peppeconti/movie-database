import React, { useState } from "react";
import classes from './SearchForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from "./Select";
import { useFormik } from "formik";

const options = [
    { value: 'movies', label: 'Movies' },
    { value: 'series', label: 'Series' },
    { value: 'ciccio', label: 'Ciccio' }
];

const SearchForm = () => {

    const [active, setActive] = useState('');

    const expandeInput = () => {
        setActive(classes.active);
    }
    const closeInput = () => {
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
            <div className={`${classes.wrapper} ${active}`}>
                <Select options={options} className={classes.select} />
                <Select className={classes.select} />
                <div className={`${classes.cancel_btn} ${active}`} type="button" onClick={closeInput}>
                    <FontAwesomeIcon icon="times" />
                </div>
            </div>
        </form>
    )
}

export default SearchForm;
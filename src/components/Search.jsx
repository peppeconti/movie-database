import React from "react";
import classes from './Search.module.css';
import Select from "./Select";
import { useFormik } from "formik";
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const options = [
    { value: '', label: 'All types' },
    { value: 'movie', label: 'Movie' },
    { value: 'series', label: 'Series' },
    { value: 'episode', label: 'Episode' }
];

const options2 = [
    { value: '', label: 'All persons' },
    { value: 'pino', label: 'Pino' },
    { value: 'gianni', label: 'Gianni' },
    { value: 'piero', label: 'Piero' }
];

const Search = () => {

    //const navigate = useNavigate();

    const validate = values => {
        const errors = {};

        if (!values.search) {
            errors.search = 'search bar is empty';
            //console.log(errors.search);
        };
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            search: '',
            type: '',
            persons: ''
        },
        validate,
        onSubmit: values => {
            console.log(values);
            //if (setPage) setPage(1);
            //navigate(`/query?s=${values.search}&type=${values.type}`)
        },
    });

    /*const filterResults = (type) => {
        formik.setFieldValue(type, value.value);
        /*if (formik.values.search) {
            formik.handleSubmit();
        }
    }*/

    return (
        <form className={classes.search_box} onSubmit={formik.handleSubmit}>
            <div className={classes.input_wrapper}>
                <input
                    className={classes.search_input}
                    name='search'
                    id='search'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.search}
                    placeholder='Type and search your favourite movies...' />
                <div className={classes.btn_wrapper}>
                    <button className={classes.search_btn} type='submit'>
                        <BiSearch className={classes.search_icon} />
                    </button>
                </div>
            </div>
            {<div className={classes.select_wrapper}>
                <div className={classes.select}>
                    <Select
                        options={options}
                        value={formik.values.type}
                        onChange={(value) => formik.setFieldValue('type', value.value)}
                        className={classes.select}
                    />
                </div>
                <div className={classes.select}>
                    <Select
                        options={options2}
                        value={formik.values.persons}
                        onChange={(value) => formik.setFieldValue('persons', value.value)}
                        className={classes.select}
                    />
                </div>
            </div>}
        </form>
    )
}

export default Search;
import React from "react";
import classes from './Search.module.css';
import Select from "./Select";
import { useFormik } from "formik";
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

const options = [
    { value: '', label: 'All types' },
    { value: 'movie', label: 'Movie' },
    { value: 'series', label: 'Series' },
    { value: 'episode', label: 'Episode' }
];

const years = () => {
    let max = new Date().getFullYear();
    let range = max - 1895;
    let min = max - range;
    let years = [];

    for (let i = max; i >= min; i--) {
        years.push(i);
    }
    return years;
}

const years_options = [{ value: '', label: 'All year' }, years().map(e => {
    return { value: e.toString(), label: e.toString() }
})].flat();


const Search = ({ setPage }) => {

    const navigate = useNavigate();

    const { queryString, currentParams } = useQuery();

    const validate = values => {
        const errors = {};

        if (!values.s) {
            errors.s = 'search bar is empty';
            //console.log(errors.search);
        };
        return errors;
    }

    /*useEffect(() => {
        console.log(currentParams);
    }, [currentParams])*/

    const formik = useFormik({
        initialValues: {
            s: currentParams.s || '',
            type: currentParams.type || '',
            y: currentParams.y || ''
        },
        validate,
        onSubmit: values => {
            //console.log(values);
            const queryStr = queryString(values);
            if (setPage) setPage(1);
            navigate(`/query?${queryStr}`)
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
                    name='s'
                    id='s'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.s}
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
                        options={years_options}
                        value={formik.values.y}
                        onChange={(value) => formik.setFieldValue('y', value.value)}
                        className={classes.select}
                    />
                </div>
            </div>}
        </form>
    )
}

export default Search;
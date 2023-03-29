import React from "react";
import classes from './Search.module.css';
import CustomSelect from "./CustomSelect";
import { useFormik } from "formik";
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

const options = [
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

const years_options = years().map(e => {
    return { value: e.toString(), label: e.toString() }
});


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
            console.log(values);
            const queryStr = queryString(values);
            if (setPage) setPage(1);
            navigate(`/results?${queryStr}`)
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
                    <CustomSelect
                        options={options}
                        value={formik.values.type}
                        placeholder='Select type'
                        onChange={val => {
                            if (val) formik.setFieldValue('type', val.value)
                            else formik.setFieldValue('type', '')
                        }}
                        className={classes.select}
                    />
                </div>
                <div className={classes.select}>
                    <CustomSelect
                        options={years_options}
                        value={formik.values.y}
                        placeholder='Select year'
                        onChange={val => {
                            if (val) formik.setFieldValue('y', val.value)
                            else formik.setFieldValue('y', '')
                        }}
                        className={classes.select}
                    />
                </div>
            </div>}
        </form>
    )
}

export default Search;
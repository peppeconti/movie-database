import React from "react";
import classes from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from "./Select";
import { motion as m } from "framer-motion";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const options = [
    { value: '', label: 'All types' },
    { value: 'movie', label: 'Movie' },
    { value: 'series', label: 'Series' },
    { value: 'episode', label: 'Episode' }
];

const formVariants = {
    hidden: {
        width: 50,
    },
    visible: {
        width: '100%',
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: 2
        }
    }
}

const buttonVariants = {
    hidden: {
        right: 0,
        height: 60,
        width: 60,
        color: '#232323',
        backgroundColor: '#FCFCFC',
        fontSize: '1.5rem',
        rotate: 0,
        translateY: '-50%'
    },
    visible: {
        right: 5,
        height: 40,
        width: 40,
        color: '#FCFCFC',
        backgroundColor: '#232323',
        fontSize: '1rem',
        rotate: 360,
        translateY: '-50%',
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: 2
        }
    }
}

const inputVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: 2
        }
    }
}

const selectVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: 2.5
        }
    }
}

const Search = ({setPage}) => {

    const navigate = useNavigate();

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
            type: ''
        },
        validate,
        onSubmit: values => {
            //console.log(values);
            setPage(1);
            navigate(`/query?s=${values.search}&type=${values.type}`)
        },
    });

    const filterResults = (value) => {
            formik.setFieldValue('type', value.value);
            if (formik.values.search) {
                formik.handleSubmit();
            }
    }

    return (
        <m.form
            className={classes.search_box}
            variants={formVariants}
            initial='hidden'
            animate='visible'
            onSubmit={formik.handleSubmit}>
            <m.input
                className={classes.search_input}
                variants={inputVariants}
                name='search'
                id='search'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.search}
                placeholder='Type and search your favourite movies by title...' />
            <m.button
                variants={buttonVariants}
                className={classes.search_btn}
                type='submit'
            >
                <FontAwesomeIcon icon='search' />
            </m.button>
            <div
                className={classes.wrapper}>
                <m.div className={classes.select} variants={selectVariants} initial='hidden' animate='visible'>
                    <Select
                        options={options}
                        value={formik.values.type}
                        onChange={filterResults}
                        className={classes.select}
                    />
                </m.div>
            </div>
        </m.form>
    )
}

export default Search;
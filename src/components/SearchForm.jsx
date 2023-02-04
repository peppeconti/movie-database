import React from "react";
import classes from './SearchForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//cimport Select from "./Select";
import { motion as m } from "framer-motion";
import { useFormik } from "formik";

/*const options = [
    { value: 'movies', label: 'Movies' },
    { value: 'series', label: 'Series' },
    { value: 'ciccio', label: 'Ciccio' }
];*/

const SearchForm = () => {

    //const [active, setActive] = useState('');

    /*const expandeInput = () => {
        setActive(classes.active);
    }
    const closeInput = () => {
        setActive('');
    }*/

    const validate = values => {
        const errors = {};

        if (!values.search) {
            errors.search = 'search bar is empty'
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

    const init = {
        height: 60,
        width: 60,
        color: '#232323',
        backgroundColor: '#FCFCFC',
        fontSize: '1.5rem',
        rotate: 0,
        translateY: '-50%'

    }

    const anim = {
        right: 5,
        height: 50,
        width: 50,
        color: '#FCFCFC',
        backgroundColor: '#232323',
        fontSize: '1.3rem',
        rotate: 360,
        translateY: '-50%'
    }

    const transition = { delay: 2, duration: .5, ease: [0.68, -0.55, 0.265, 1.55] }

    return (
        <m.form
            className={classes.search_box}
            initial={{ height: 60, width: 60 }}
            animate={{ width: 600 }}
            transition={transition}
            onSubmit={formik.handleSubmit}>
            <m.input
                className={classes.search_input}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
                name='search'
                id='search'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.search}
                placeholder='Type and search your favourite movies by title...' />
            <m.button
                initial={init}
                animate={anim}
                transition={transition}
                className={classes.search_btn}
                type='button'>
                <FontAwesomeIcon icon="search" />
            </m.button>
        </m.form>
    )
}

export default SearchForm;

/**
 *  /*<m.button
                //animate={{ zIndex: 2 }}
                className={`${classes.search_btn} ${classes.submit_btn}`} type="submit">
                <FontAwesomeIcon icon="search" />
            </m.button>
 <div className={`${classes.wrapper} ${active}`}>
                <Select options={options} className={classes.select} />
                <Select className={classes.select} />
                <div className={`${classes.cancel_btn} ${active}`} type="button" onClick={closeInput}>
                    <FontAwesomeIcon icon="times" />
                </div>
</div>


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
        </form>
 */
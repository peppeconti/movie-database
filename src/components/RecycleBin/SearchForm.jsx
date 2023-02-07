import React from "react";
import classes from './SearchForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from "../Select";
import { motion as m, useCycle } from "framer-motion";
import { useFormik } from "formik";

const options = [
    { value: 'movies', label: 'Movies' },
    { value: 'series', label: 'Series' },
    { value: 'ciccio', label: 'Ciccio' }
];

const transition = {
    duration: .5,
    ease: [0.68, -0.55, 0.265, 1.55],
    delay: .5
};

const selectTransition = {
    duration: .5,
    ease: [0.68, -0.55, 0.265, 1.55],
    delay: 1
};

const formVariants = {
    hidden: {
        width: 50,
        transition: transition
    },
    visible: {
        width: '100%',
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
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
        translateY: '-50%',
        transition: transition
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
        }
    }
}


const inputVariants = {
    hidden: {
        opacity: 0,
        transition: transition
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
        }
    }
}


const wrapperVariants = {
    hidden: {
        top: '50%',
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
        }
    },
    visible: {
        top: 80,
        transition: transition
    }
}

const cancelVariants = {
    hidden: {
        rotate: 0,
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
        }
    },
    visible: {
        rotate: 360,
        transition: transition
    }
}

const selectVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: .5,
            ease: [0.68, -0.55, 0.265, 1.55],
        }
    },
    visible: {
        opacity: 1,
        transition: selectTransition
    }
}

const SearchForm = () => {

    const [animation, cycleAnimation] = useCycle('hidden', 'visible')

    const validate = values => {
        const errors = {};

        if (!values.search) {
            errors.search = 'search bar is empty';
            console.log(errors.search);
        };
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
        <m.form
            className={classes.search_box}
            variants={formVariants}
            initial='hidden'
            animate={animation}
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
                type={animation === 'hidden' ? 'button' : 'submit'}
                onClick={() => {
                    if (animation === 'hidden') cycleAnimation();
                }}

            >
                <FontAwesomeIcon icon='search' />
            </m.button>
            <m.div
                className={classes.wrapper}
                variants={wrapperVariants}>
                <m.div className={classes.select} variants={selectVariants}>
                    <Select options={options} className={classes.select} />
                </m.div>
                <m.div className={classes.select} variants={selectVariants}>
                    <Select options={options} className={classes.select} />
                </m.div>
            </m.div>
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
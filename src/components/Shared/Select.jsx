import React from "react";
import Select from 'react-select';

const CustomSelect = ({ onChange, options, value }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : '';
    };

    return (
        <Select
            onChange={value => onChange(value)}
            value={defaultValue(options, value)}
            options={options}
            styles={
                {
                    control: (styles, state) => ({
                        ...styles,
                        borderRadius: '50px',
                    }),

                }
            }
        />
    )
}

export default CustomSelect;
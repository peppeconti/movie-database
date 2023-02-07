import React from "react";
import Select from 'react-select';

const CustomSelect = ({ onChange, options, value }) => {

    const defaultValue = '';

    return (
        <Select
            onChange={onChange}
            value={value}
            options={options}
            styles={
                {
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '50px',
                    })
                }
            }
        />
    )
}

export default CustomSelect;
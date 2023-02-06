import React from "react";
import Select from 'react-select';

const CustomSelect = ({ onChange, options, value }) => {

    const defaultValue = 'Select funcia';

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
                    }),
                    placeholder: (baseStyles, state) => ({
                        ...baseStyles,
                        color: '#1d1d1d'
                    })
                }
            }
        />
    )
}

export default CustomSelect;
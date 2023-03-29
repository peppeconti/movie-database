import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, value, placeholder, onChange }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : null;
    };

    return (
        <>
            <Select
                value={defaultValue(options, value)}
                onChange={val => onChange(val)}
                isClearable
                options={options}
                placeholder={placeholder}
                styles={
                    {
                        control: styles => ({
                            ...styles,
                            borderRadius: '50px',
                        }),
    
                    }
                }
            />
        </>
    );
};

export default CustomSelect;
import React from "react";
import Select from 'react-select';

const CustomSelect = ({ onChange, options, value, className }) => {

    const defaultValue = '';

    return (
        <div className={className}>
            <Select
                onChange={onChange}
                value={value}
                options={options}
            />
        </div>
    )
}

export default CustomSelect;
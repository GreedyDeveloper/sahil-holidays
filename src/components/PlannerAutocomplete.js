import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const PlannerAutocomplete = ({ values, setFieldValue, name, label = "Add items", placeholder = "Type and separate with comma" }) => {
    return (
        <Autocomplete
            multiple
            freeSolo
            options={[]} // no predefined options
            value={values}
            onChange={(event, newValue) => {
                setFieldValue(name, newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    placeholder={placeholder}
                    fullWidth
                />
            )}
        />
    );
};

export default PlannerAutocomplete;

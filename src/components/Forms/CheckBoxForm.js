import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// labels=[[key, label], [], ...]
const CheckBoxForm = (props) => {
    return (
        <>
            {props.labels.map(([key, label]) => (
                <FormControlLabel
                    key={key}
                    control={
                        <Checkbox
                            color="primary"
                            checked={props.filter[key]}
                            onChange={() => props.onChange(key)}
                            value={label}
                        />
                    }
                    label={props.labelText ? props.labelText(key, label) : label}
                />
            ))}
        </>
    );
};

export default CheckBoxForm;
import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioForm = (props) => {
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">{props.legend}</FormLabel>
                <RadioGroup
                    aria-label={props.legend}
                    name={props.legend}
                    value={props.value}
                    onChange={(e) => props.onChange(e)}
                    row
                >
                    {props.labels.map(([value, label]) => (
                        <FormControlLabel
                            key={value}
                            value={value}
                            control={<Radio color="primary" />}
                            label={label}
                            labelPlacement="end"
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default RadioForm;
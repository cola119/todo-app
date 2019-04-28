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
                    aria-label="radios"
                    name="radios"
                    value={props.value}
                    onChange={(e) => props.onChange(e)}
                    row
                >
                    {props.labels.map(label => (
                        <FormControlLabel
                            key={label[0]}
                            value={label[0]}
                            control={<Radio color="primary" />}
                            label={label[1]}
                            labelPlacement="end"
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default RadioForm;
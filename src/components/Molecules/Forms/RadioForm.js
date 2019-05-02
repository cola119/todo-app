import React from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioForm = React.memo((props) => {
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
}, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});

RadioForm.propTypes = {
    legend: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default RadioForm;
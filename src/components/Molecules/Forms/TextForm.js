import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const TextForm = React.memo((props) => {
    return (
        <TextField
            required
            autoFocus
            label={props.label}
            placeholder={props.placeholder}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={e => props.onChange(e)}
            value={props.value}
        />
    );
}, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});

TextForm.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default TextForm;
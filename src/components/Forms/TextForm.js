import React from 'react';

import TextField from '@material-ui/core/TextField';

const TextForm = (props) => {
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
};

export default TextForm;
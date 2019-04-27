import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

const TodoForm = (props) => {

    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
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
                onChange={e => setValue(e.target.value)}
                value={value}
            />
        </form>
    );
};

export default TodoForm;
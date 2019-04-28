import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// labels=[[checked value, text label], [], ...]
const SwitchForm = (props) => {
    return (
        <>
            {props.labels.map(label => (
                <FormControlLabel
                    key={label[0]}
                    control={
                        <Switch
                            checked={props.value[label[0]]}
                            onChange={() => props.onChange(label[0])}
                            value={label[0]}
                        />
                    }
                    label={label[1]}
                />
            ))}
        </>
    );
};

export default SwitchForm;
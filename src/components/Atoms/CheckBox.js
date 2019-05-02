import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBox = React.memo((props) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    color="primary"
                    checked={props.checked}
                    onChange={props.onChange}
                    value={props.value}
                />
            }
            label={props.label}
        />
    );
}, (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked && prevProps.label === nextProps.label;
});


CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default CheckBox;
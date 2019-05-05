import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../Atoms/CheckBox';

// labels=[[key, label], [], ...]
const CheckBoxForm = (props) => {
    return (
        <>
            {props.labels.map(([key, label]) => (
                <CheckBox
                    key={key}
                    checked={props.filter[key]}
                    onChange={() => props.onChange(key)}
                    value={label}
                    label={props.labelText(key, label)}
                />
            ))}
        </>
    );
};

CheckBoxForm.defaultProps = {
    labelText: (key, label) => label
};

CheckBoxForm.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onChange: PropTypes.func.isRequired,
    labelText: PropTypes.func,
    filter: PropTypes.objectOf(PropTypes.bool).isRequired
};

export default CheckBoxForm;
import React from 'react';

import CheckBoxForm from './Forms/CheckBoxForm';


const FilterForm = (props) => {
    return (
        <CheckBoxForm
            labelText={(key, label) => `${label}(${props.todos.filter(todo => todo[props.labelKey] === key).length})`}
            filter={props.filter}
            labels={Object.entries(props.labels)}
            onChange={(key) => props.handleFileter(key)}
        />
    );
};

export default FilterForm;
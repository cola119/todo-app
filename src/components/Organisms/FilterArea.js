import React from 'react';

import withWidth from '@material-ui/core/withWidth';

import Divider from '@material-ui/core/Divider';
import CheckBoxForm from '../Molecules/Forms/CheckBoxForm';
import Expansion from '../Atoms/Expansion';

const FilterArea = (props) => {
    // ex) 完了(2) : key=complete, label=完了
    const labelText = (key, label) => `${label}(${props.todos.filter(todo => props.todoKeys.some(todoKey => todo[todoKey] === key)).length})`;
    const component = (
        <div>
            {props.todoKeys.map((todoKey, i) => (
                <span key={todoKey}>
                    <CheckBoxForm
                        labels={Object.entries(props.labels[i])}
                        labelText={labelText}
                        filter={props.filters[i]}
                        onChange={(filterKey) => props.handleFileters[i](filterKey)}
                    />
                    {i !== props.todoKeys.length - 1 && <Divider />}
                </span>
            ))}
        </div>
    );

    if (props.width !== 'xs') return component;
    return (
        <Expansion title="絞り込み">
            {component}
        </Expansion>
    );
};

export default withWidth()(FilterArea);
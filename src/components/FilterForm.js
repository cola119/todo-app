import React from 'react';

import SwitchForm from './Forms/SwitchForm';

const FilterForm = (props) => {
    const filterLabels = {
        incomplete: "未完了のタスクを表示",
        complete: "完了済みタスクを表示",
    }
    return (
        <SwitchForm
            value={props.filter}
            labels={Object.entries(filterLabels)}
            onChange={(key) => props.handleFileter(key)}
        />
    );
};

export default FilterForm;
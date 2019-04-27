import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const FilterForm = (props) => {
    return (
        <>
            <FormControlLabel
                control={
                    <Switch
                        checked={props.filter['incomplete']}
                        onChange={() => props.handleFileter('incomplete')}
                        value="incomplete"
                    />
                }
                label="未完了のタスクを表示"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={props.filter['complete']}
                        onChange={() => props.handleFileter('complete')}
                        value="complete"
                    />
                }
                label="完了したタスクを表示"
            />
        </>
    );
};

export default FilterForm;
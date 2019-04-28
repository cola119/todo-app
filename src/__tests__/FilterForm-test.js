import React from 'react';
import renderer from 'react-test-renderer';
import FilterForm from '../components/FilterForm';

test('<FilterForm />のスナップショット', () => {
    const stateLabels = {
        incomplete: "未完了",
        complete: "完了済み",
    }
    const todos = [
        { id: 12345, title: "title1", priority: "high", deadline: "today", state: 'incomplete', created_at: 1519211810362 },
        { id: 23456, title: "title2", priority: "medium", deadline: "tomorrow", state: 'complete', created_at: 1519211811670 },
        { id: 65432, title: "title3", priority: "low", deadline: "week", state: 'incomplete', created_at: 1519211809934 },
        { id: 83553, title: "title4", priority: "medium", deadline: "other", state: 'complete', created_at: 1519129853500 },
        { id: 53215, title: "title5", priority: "high", deadline: "week", state: 'incomplete', created_at: 1519129864400 },
    ];
    const stateFilter = { incomplete: true, complete: true };

    const tree = renderer.create(<FilterForm todos={todos} labels={stateLabels} labelKey="state" filter={stateFilter} />).toJSON();
    expect(tree).toMatchSnapshot();
})
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TodoForm from '../components/TodoForm';

const formInitial = { title: '', priority: 'medium', deadline: 'today' };
const deadlineLabels = {
    today: "今日中",
    tomorrow: "明日まで",
    week: "一週間",
    other: "未定",
}
const priorityLabels = {
    high: "高い",
    medium: "普通",
    low: "低い",
}

describe('<TodoForm />', () => {
    it('<TodoForm />のスナップショット', () => {
        const tree = renderer.create(<TodoForm label="label" placeholder="placeholder" formInitial={formInitial} deadlineLabels={deadlineLabels} priorityLabels={priorityLabels} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})



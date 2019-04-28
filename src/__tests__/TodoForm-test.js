import React from 'react';
import renderer from 'react-test-renderer';
import TodoForm from '../components/TodoForm';

test('<TodoForm />のスナップショット', () => {
    const testLabels = {
        hoge: "hogehoge",
        foo: "foofoo",
    }
    const tree = renderer.create(<TodoForm label="label" placeholder="placeholder" deadlineLabels={testLabels} />).toJSON();
    expect(tree).toMatchSnapshot();
})
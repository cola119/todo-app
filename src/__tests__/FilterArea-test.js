import React from 'react';
import renderer from 'react-test-renderer';
import FilterArea from '../components/FilterArea';

const label = {
    key1: "hoge",
    key2: "foo",
}
const filter = { key1: true, key2: true };

describe('<FilterArea />', () => {
    it('<FilterArea />のスナップショット', () => {
        const tree = renderer.create(
            <FilterArea
                todos={[{ state: "key1" }, { state: "key1" }, { state: "key2" }]}
                labels={[label, label]}
                todoKeys={["state"]}
                filters={[filter, filter]}
                handleFileters={[]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
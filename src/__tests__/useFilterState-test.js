import { act } from 'react-dom/test-utils';
import testHook from '../testUtils/testHook';
import useFilterState from '../hooks/useFilterState';

let filterState;
const initialFilter = { key1: true, key2: true }
beforeEach(() => {
    testHook(() => {
        filterState = useFilterState(initialFilter);
    });
});

describe('useTextField', () => {
    it('should have an handleFilter function', () => {
        expect(filterState.handleFilter).toBeInstanceOf(Function);
    });

    it('should have correct initial state', () => {
        expect(filterState.filter).toEqual(initialFilter);
    });

    it('filter[key1] should have changed', () => {
        act(() => filterState.handleFilter("key1"))
        expect(filterState.filter).toEqual({ key1: false, key2: true });
    });

});
import { useState } from 'react';

// filter: {key1: true, key2: false}
const useFilterState = (init) => {

    const [filter, setFilter] = useState(init);
    return {
        filter,
        handleFilter: (key) => {
            setFilter({ ...filter, [key]: !filter[key] })
        },
    }
};

export default useFilterState;
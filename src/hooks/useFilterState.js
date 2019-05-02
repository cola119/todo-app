import { useState } from 'react';

// init: {key1: string, key2: string}
const useFilterState = (init) => {
    // filter: {key1: bool, key2: bool}
    const [filter, setFilter] = useState(() => Object.fromEntries(Object.entries(init).map(([key, val]) => [key, true])));
    return {
        filter,
        handleFilter: key => setFilter(prev => ({ ...prev, [key]: !prev[key] })),
    }
};

export default useFilterState;
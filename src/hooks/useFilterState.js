import { useState } from 'react';

const useFilterState = (init) => {
    const [filter, setFilter] = useState(init);
    return {
        filter,
        handleFileter: (key) => {
            setFilter({ ...filter, [key]: !filter[key] })
        },
    }
};

export default useFilterState;
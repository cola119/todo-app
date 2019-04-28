import { useState } from 'react';

const useFilterState = (init) => {
    const [filter, setFilter] = useState(init);
    return {
        filter,
        handleFileter: (name) => {
            setFilter({ ...filter, [name]: !filter[name] })
        },
    }
};

export default useFilterState;
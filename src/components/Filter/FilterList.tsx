import { v1 as uuidv1 } from 'uuid';

import type { IFilterType } from './interface';
import FilterItem from './FilterItem';
import './Filter.scss';

export default function useFilterList({ filter, onChange }: IFilterType) {
    const items = filter.map(({ filterName, isChecked }) => ({
        key: uuidv1(),
        label: <FilterItem filterName={filterName} isChecked={isChecked} onChange={onChange} />,
    }));

    return items;
}

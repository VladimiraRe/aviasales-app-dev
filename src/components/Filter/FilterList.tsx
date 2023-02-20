import { v1 as uuidv1 } from 'uuid';

import FilterItem from './FilterItem';
import './Filter.scss';

type IFilterType = import('./interface').IFilterType;

export default function FilterList({ filter, onChange }: IFilterType) {
    const items = filter.map(({ filterName, isChecked }) => (
        <li key={uuidv1()}>
            <FilterItem filterName={filterName} isChecked={isChecked} onChange={onChange} />
        </li>
    ));

    return <ul className='filter__list'>{items}</ul>;
}

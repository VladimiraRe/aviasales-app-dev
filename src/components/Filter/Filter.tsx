import FilterList from './FilterList';
import './Filter.scss';

type IFilterType = import('./interface').IFilterType;

export default function Filter({ filter, onChange }: IFilterType) {
    return (
        <aside className='filter'>
            <h2 className='filter__title'>Количество пересадок</h2>
            <FilterList filter={filter} onChange={onChange} />
        </aside>
    );
}

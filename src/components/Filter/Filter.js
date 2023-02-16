import PropTypes from 'prop-types';

import FilterList from './FilterList';
import './Filter.scss';

export default function Filter({ filter, onChange }) {
    return (
        <aside className='filter'>
            <h2 className='filter__title'>Количество пересадок</h2>
            <FilterList filter={filter} onChange={onChange} />
        </aside>
    );
}

Filter.defaultProps = {
    filter: [
        { name: 'все', isChecked: true },
        { name: 'без пересадок', isChecked: false },
    ],
    onChange: () => null,
};

Filter.propTypes = {
    filter: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))),
    onChange: PropTypes.func,
};

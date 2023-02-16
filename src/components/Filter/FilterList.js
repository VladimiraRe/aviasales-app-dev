// import PropTypes from 'prop-types';
import { v1 as uuidv1 } from 'uuid';

import FilterItem from './FilterItem';
import classes from './Filter.module.scss';

export default function FilterList({ filter, onChange }) {
    const items = filter.map(({ name, isChecked }) => (
        <li key={uuidv1()}>
            <FilterItem name={name} isChecked={isChecked} onChange={onChange} />
        </li>
    ));

    return <ul className={classes.filter__list}>{items}</ul>;
}

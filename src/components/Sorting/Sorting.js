// import PropTypes from 'prop-types';
import { Radio } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

import classes from './Sorting.scss';

export default function Sorting({ value }) {
    const sorting = [
        { name: 'Самый дешевый', value: 'cheap' },
        { name: 'Самый быстрый', value: 'fast' },
        { name: 'Оптимальный', value: 'optimal' },
    ];

    const [checked, setChecked] = useState(null);

    useEffect(() => setChecked(value), [value]);

    const btns = sorting.map((el) => (
        <Radio.Button
            key={uuidv1()}
            className={classNames('sorting__btn', { 'sorting__btn--select': checked === el.value })}
            value={el.value}
            onChange={(e) => setChecked(e.target.value)}
        >
            {el.name}
        </Radio.Button>
    ));

    return (
        <Radio.Group value={checked} className={classes.sorting}>
            {btns}
        </Radio.Group>
    );
}

Sorting.propTypes = {
    // bla: PropTypes.string,
};

Sorting.defaultProps = {
    // bla: 'test',
};

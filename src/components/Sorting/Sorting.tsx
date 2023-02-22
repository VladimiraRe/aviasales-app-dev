import { Radio } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

import './Sorting.scss';

export default function Sorting({ value, isMobile }: { value: string; isMobile: boolean }) {
    const [sorting, setSorting] = useState(createSorting(isMobile));
    const [checked, setChecked] = useState<null | string>(null);

    useEffect(() => setChecked(value), [value]);
    useEffect(() => setSorting(createSorting(isMobile)), [isMobile]);

    const btns = createBtnsList(sorting, setChecked, checked);

    return (
        <Radio.Group value={checked} className='sorting'>
            {btns}
        </Radio.Group>
    );
}

function createSorting(isMobile: boolean) {
    return [
        { name: `${!isMobile ? 'самый ' : ''}дешевый`, value: 'cheap' },
        { name: `${!isMobile ? 'самый ' : ''}быстрый`, value: 'fast' },
        { name: 'оптимальный', value: 'optimal' },
    ];
}

function createBtnsList(sorting: { name: string; value: string }[], func: (e: string) => void, checked: null | string) {
    return sorting.map((el) => (
        <Radio.Button
            key={uuidv1()}
            className={classNames('sorting__btn', { 'sorting__btn--select': checked === el.value })}
            value={el.value}
            onChange={(e) => func(e.target.value)}
        >
            {el.name}
        </Radio.Button>
    ));
}

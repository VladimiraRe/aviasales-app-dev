import { Radio } from 'antd';
import { v1 as uuidv1 } from 'uuid';

import './Sorting.scss';
import type { sortingType, onClickType, actionsType } from '../../type';
import { sortingName } from '../../store/ticketVisibility/actions';

export default function Sorting({
    sorting: checked,
    isMobile,
    onClick,
}: {
    sorting: sortingType;
    isMobile: boolean;
    onClick: onClickType<sortingType, actionsType>;
}) {
    const sortingObj = createSortingObj(isMobile, sortingName);
    const btns = createBtnsList(sortingObj, onClick, checked);

    return (
        <Radio.Group value={checked} className='sorting'>
            {btns}
        </Radio.Group>
    );
}

function createBtnsList(
    sorting: { name: string; value: sortingType }[],
    onClick: onClickType<sortingType>,
    checked: sortingType
) {
    return sorting.map((el) => {
        const className = ['sorting__btn'];
        if (checked === el.value) className.push('sorting__btn--select');
        return (
            <Radio.Button
                key={uuidv1()}
                className={className.join(' ')}
                value={el.value}
                onChange={() => onClick(el.value)}
            >
                {el.name}
            </Radio.Button>
        );
    });
}

function createSortingObj(isMobile: boolean, sorting: typeof sortingName) {
    return [
        { name: `${!isMobile ? 'самый ' : ''}дешевый`, value: sorting.CHEAP },
        { name: `${!isMobile ? 'самый ' : ''}быстрый`, value: sorting.FAST },
        { name: 'оптимальный', value: sorting.OPTIMAL },
    ];
}

import { Menu } from 'antd';
import { v1 as uuidv1 } from 'uuid';

import type { stopsFilterType } from '../../type';
import { stopsFilter } from '../../store/stopsFilter/actions';
import './StopsFilter.scss';
import StopsFilterLink from '../../containers/StopsFilterLink';

export default function StopsFilter({ isMobile }: { isMobile: boolean }) {
    const filterNames = ['все', 'без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

    const items = [
        {
            key: 'top',
            label: 'Количество пересадок',
            children: createFilterList(Object.values(stopsFilter), filterNames),
        },
    ];
    const defaultOpenKeys = !isMobile ? ['top'] : undefined;

    return (
        <Menu
            className='filter'
            mode='inline'
            items={items}
            defaultOpenKeys={defaultOpenKeys}
            multiple
            triggerSubMenuAction='click'
        />
    );
}

function createFilterList(filterArr: stopsFilterType[], filterNames: string[]) {
    const items = filterArr.map((filter, id) => ({
        key: uuidv1(),
        label: <StopsFilterLink filter={filter}>{filterNames[id]}</StopsFilterLink>,
    }));

    return items;
}

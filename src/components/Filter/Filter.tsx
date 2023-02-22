import { Menu } from 'antd';
import { v1 as uuidv1 } from 'uuid';

import './Filter.scss';
import FilterItem from './FilterItem';
import type { IFilterType, ISupport } from './interface';

export default function Filter({ filter, onChange, isMobile }: IFilterType) {
    const items = [{ key: 'top', label: 'Количество пересадок', children: createFilterList({ filter, onChange }) }];
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

function createFilterList({ filter, onChange }: IFilterType) {
    const items = filter.map(({ filterName, isChecked }: ISupport) => ({
        key: uuidv1(),
        label: <FilterItem filterName={filterName} isChecked={isChecked} onChange={onChange} />,
    }));

    return items;
}

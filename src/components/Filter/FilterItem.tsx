import { Checkbox } from 'antd';

import type { IFilterItem } from './interface';

export default function FilterItem({ filterName, isChecked, onChange }: IFilterItem) {
    return (
        <div>
            <Checkbox checked={isChecked} onChange={onChange}>
                {filterName}
            </Checkbox>
        </div>
    );
}

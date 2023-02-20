import { Checkbox } from 'antd';

type IFilterItem = import('./interface').IFilterItem;

export default function FilterItem({ filterName, isChecked, onChange }: IFilterItem) {
    return (
        <div>
            <Checkbox checked={isChecked} onChange={onChange}>
                {filterName}
            </Checkbox>
        </div>
    );
}

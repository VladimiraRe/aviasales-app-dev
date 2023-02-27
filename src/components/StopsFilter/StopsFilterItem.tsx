import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import type { onClickType } from '../../type';

export default function StopsFilterItem({
    onClick,
    isChecked,
    children,
}: {
    onClick: onClickType<CheckboxChangeEvent>;
    isChecked: boolean;
    children: string;
}) {
    return (
        <div>
            <Checkbox checked={isChecked} onChange={onClick}>
                {children}
            </Checkbox>
        </div>
    );
}

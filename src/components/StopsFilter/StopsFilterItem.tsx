import { Checkbox } from 'antd';

export default function StopsFilterItem({
    onClick,
    isChecked,
    children,
}: {
    onClick: () => void;
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

import { Button as AntdButton } from 'antd';

import type { onClickType } from '../../type';
import './Button.scss';

interface IButton {
    text: string;
    onClick: onClickType<unknown>;
    isHidden: boolean;
}

export default function Button({ text, onClick, isHidden }: IButton) {
    const className = ['button'];
    if (isHidden) className.push('button--hiden');

    return (
        <AntdButton className={className.join(' ')} onClick={onClick}>
            {text}
        </AntdButton>
    );
}

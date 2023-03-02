import type { AlertProps } from 'antd';
import { Alert } from 'antd';

import type { errorsType } from '../../type';

export default function WarningError({ error = null, text = '' }: { error?: errorsType | null; text?: string }) {
    const errorName: AlertProps['type'] = 'warning';
    let message = text;
    if (error === 'componentsError') {
        message = 'Гремлины немного поломали приложение, перезагрузитесь, чтобы их прогнать';
    } else if (error === 'fetchError') {
        message = 'Данные могут быть неполными, попробуйте перезагрузить страницу';
    }

    return <Alert type={errorName} message={message} banner />;
}

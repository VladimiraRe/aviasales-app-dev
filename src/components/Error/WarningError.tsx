import type { AlertProps } from 'antd';
import { Alert } from 'antd';

import type { errorsType } from '../../type';

export default function WarningError({ error }: { error: errorsType }) {
    const errorName: AlertProps['type'] = 'warning';
    let message = '';
    if (error === 'componentsError') {
        message = 'Гремлины немного поломали приложение, перезагрузитесь, чтобы их прогнать';
    } else if (error === 'fetchError') {
        message = 'Данные могут быть неполными, попробуйте перезагрузиться';
    }

    return <Alert type={errorName} message={message} banner />;
}

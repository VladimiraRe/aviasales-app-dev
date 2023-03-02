import type { AlertProps } from 'antd';
import { Alert } from 'antd';

import type { errorsType } from '../../type';

export default function CriticalError({ error = null }: { error?: errorsType | null }) {
    const errorName: AlertProps['type'] = 'error';
    let message = '';
    if (error === 'networkError') message = 'Отсутствует подключение к интернету';
    else if (error === 'fetchError') message = 'Наш сервер неожиданно улетел в отпуск, попробуйте зайти позже';
    else if (!error) message = 'Найдено критическое число ошибок, свяжитесь, пожалуйста, с тех. поддержкой!';

    return <Alert type={errorName} message={message} banner />;
}

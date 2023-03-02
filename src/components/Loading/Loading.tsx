import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import type { storeType } from '../../type';

export default function Loading() {
    const isLoading = useSelector((state: storeType) => state.isLoading);
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    if (!isLoading) return null;

    return <Spin indicator={antIcon} />;
}

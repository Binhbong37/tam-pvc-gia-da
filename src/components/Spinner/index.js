import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Spinner = () => {
    const antIcon = (
        <LoadingOutlined style={{ fontSize: 70, textAlign: 'center' }} spin />
    );
    return (
        <div style={{ textAlign: 'center' }}>
            <Spin size="large" indicator={antIcon} />
        </div>
    );
};

export default Spinner;

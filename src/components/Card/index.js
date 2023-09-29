import React, { useState } from 'react';
import './style.css';
import { Image } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Card = ({ imga, title }) => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div className="card">
            <Image src={imga} />
            <div className="card-footer">
                <p>{title}</p>
                {isAuth && (
                    <p>
                        <span>
                            <EditOutlined />
                            <DeleteOutlined />
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;

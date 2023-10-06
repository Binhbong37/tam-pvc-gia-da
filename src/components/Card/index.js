import React, { useEffect, useState } from 'react';
import './style.css';
import { Image } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Card = ({ imga, title, keyImg, haveKey, handleDelete }) => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (haveKey === 'B17061996@#') {
            setIsAuth(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="card">
            <Image src={imga} loading="lazy" />
            <div className="card-footer">
                <p>{title}</p>
                {isAuth && (
                    <p>
                        <span>
                            <EditOutlined onClick={() => console.log('Edit')} />
                            <DeleteOutlined
                                onClick={() => handleDelete(keyImg)}
                            />
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;

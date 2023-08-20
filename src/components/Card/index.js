import React from 'react';
import './style.css';
import { Image } from 'antd';

const Card = ({ imga, title }) => {
    return (
        <div className="card">
            <Image src={imga} />
            <div className="card-footer">{title}</div>
        </div>
    );
};

export default Card;

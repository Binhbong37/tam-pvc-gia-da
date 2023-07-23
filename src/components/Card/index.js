import React from 'react';
import './style.css';

const Card = ({ imga, title }) => {
    return (
        <div className="card">
            <img src={imga} alt={title} />
            <div className="card-footer">{title}</div>
        </div>
    );
};

export default Card;

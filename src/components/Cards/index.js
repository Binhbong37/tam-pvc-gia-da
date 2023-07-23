import React from 'react';
import './style.css';
import { CardsData } from '../../data';
import Card from '../Card';

const Cards = () => {
    return (
        <div className="cards">
            {CardsData.map((itme, index) => {
                return <Card key={index} imga={itme.img} title={itme.title} />;
            })}
        </div>
    );
};

export default Cards;

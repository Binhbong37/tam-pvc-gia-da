import React from 'react';
import Card from '../../components/Card';
import { Lam5Songthap } from '../../data';

const Lam5Song = () => {
  return (
    <>
    <h2>Lam 5 sóng thấp</h2>
    <div className='cards'>
    {Lam5Songthap.map((item,index) => <Card key={index} imga={item.img} title={item.title} />)}
    </div>
    </>
  )
}

export default Lam5Song
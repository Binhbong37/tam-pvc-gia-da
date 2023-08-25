import React from 'react';
import Card from '../../components/Card';
import { Lam4Songcao } from '../../data';

const Lam4Song = () => {
  return (
    <>
    <h2>Lam 4 sóng cao</h2>
    <div className='cards'>
    {Lam4Songcao.map((item,index) => <Card key={index} imga={item.img} title={item.title} />)}
    </div>
    </>
  )
}

export default Lam4Song
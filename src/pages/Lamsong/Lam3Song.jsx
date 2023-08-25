import React from 'react';
import Card from '../../components/Card';
import { LamSong } from '../../data';

const Lam3Song = () => {
  return (
    <>
    <h2>Lam 3 sóng thấp</h2>
    <div className='cards'>
    {LamSong.map((item,index) => <Card key={index} imga={item.img} title={item.title} />)}
    </div>
    </>
  )
}

export default Lam3Song
import React from 'react';
import Card from '../../components/Card';
import { LamSong } from '../../data';

const Lamsong
 = () => {
  return (
    <div>
      {/* Lam 3 song thap */}
      <h2>Lam 3 sóng thấp</h2>
      <div className='cards'>
      {LamSong.map((item,index) => <Card key={index} imga={item.img} title={item.title} />)}
      </div>

      <h2>Lam 4 sóng cao</h2>
      <div className='cards'>
      {LamSong.map((item,index) => <Card key={index} imga={item.img} title={item.title} />)}
      </div>

      <h2>Lam 5 sóng thấp</h2>
      <div className='cards'>
      {LamSong.map((item,index) => <Card key={index} imga={item.img} title={item.title} />)}
      </div>
    </div>
  )
}

export default Lamsong

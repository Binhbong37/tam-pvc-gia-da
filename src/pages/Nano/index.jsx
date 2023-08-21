import React from 'react';
import { Image } from 'antd';
import { TamNano } from '../../data';
import Card from '../../components/Card';

const Nano = () => {
  return (
    <div className='cards'>
    <Image.PreviewGroup>
      {TamNano.map((item, idx) => <Card key={idx} imga={item.img} title={item.title}/>)}
    </Image.PreviewGroup>
  </div>
  )
}

export default Nano
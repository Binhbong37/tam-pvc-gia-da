import React from 'react';
import { TamDaNangop } from '../../data';
import Card from '../../components/Card';
import { Image } from 'antd';

const TamDaNang = () => {
  return (
    <div className='cards'>
      <Image.PreviewGroup>
        
      {TamDaNangop.map((item, idx) => <Card key={idx} imga={item.img} title={item.title}/>)}
            </Image.PreviewGroup>
      
    </div>
  )
}

export default TamDaNang
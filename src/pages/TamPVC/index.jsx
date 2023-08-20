import React from 'react';
import { PvcVanDa } from '../../data';
import Card from '../../components/Card';
import { Image } from 'antd';

const TamPVC = () => {
  return (
    <div className='cards'>
      <Image.PreviewGroup>
        
      {PvcVanDa.map((item) => <Card key={item.id} imga={item.img} title={item.title}/>)}
            </Image.PreviewGroup>
      
    </div>
  )
}

export default TamPVC
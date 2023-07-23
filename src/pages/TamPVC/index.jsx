import React from 'react';
import { PvcVanDa } from '../../data';
import Card from '../../components/Card'

const TamPVC = () => {
  return (
    <div className='cards'>
      {PvcVanDa.map((item,index) => <Card key={index} imga={item.img} title={item.title} />)}
    </div>
  )
}

export default TamPVC
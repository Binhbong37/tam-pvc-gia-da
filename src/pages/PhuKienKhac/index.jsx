import { Image } from 'antd'
import React from 'react'
import Card from '../../components/Card';
import { Phukien } from '../../data';

const PhuKienKhac = () => {
  return (
    <>    
      <h2>Phụ kiện Tấm PVC & Tấm đa năng</h2>
    
    <div className='cards'>
    <Image.PreviewGroup>
      {Phukien.map((item, idx) => <Card key={idx} imga={item.img} title={item.title}/>)}
    </Image.PreviewGroup>
  </div>
  </>

  )
}

export default PhuKienKhac
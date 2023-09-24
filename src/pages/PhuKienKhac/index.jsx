import { Image, List } from 'antd'
import React from 'react'
import Card from '../../components/Card';
import { Phukien } from '../../data';

const PhuKienKhac = () => {
  return (
    <>    
      <h2>Phụ kiện Tấm PVC & Tấm đa năng</h2>
    
      <Image.PreviewGroup>
      <List
      dataSource={Phukien}
      grid={{xs:2, sm:3, md:4,lg:5, xl:6, xxl:7}}
      renderItem={(item) => {
        return(
          <Card key={item.id} imga={item.img} title={item.title} />
        )
      }}
      >
      </List>
      
    </Image.PreviewGroup>
  </>

  )
}

export default PhuKienKhac
import React from 'react';
import { Image, List } from 'antd';
import { TamNano } from '../../data';
import Card from '../../components/Card';

const Nano = () => {
  return (
    <Image.PreviewGroup>
      <List
      dataSource={TamNano}
      grid={{xs:2, sm:3, md:4,lg:5, xl:6, xxl:7}}
      renderItem={(item) => {
        return(
          <Card key={item.id} imga={item.img} title={item.title} />
        )
      }}
      >
      </List>
      
    </Image.PreviewGroup>
  )
}

export default Nano
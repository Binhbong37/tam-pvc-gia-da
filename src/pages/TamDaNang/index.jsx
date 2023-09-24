import React from 'react';
import { TamDaNangop } from '../../data';
import Card from '../../components/Card';
import { Image, List } from 'antd';

const TamDaNang = () => {
  return (
    <Image.PreviewGroup>
      <List
      dataSource={TamDaNangop}
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

export default TamDaNang
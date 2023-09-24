import React from 'react';
import Card from '../../components/Card';
import { Lam5Songthap } from '../../data';
import { Image, List } from 'antd';

const Lam5Song = () => {
  return (
    <>
    <h2>Lam 5 sóng thấp</h2>
    <Image.PreviewGroup>
      <List
      dataSource={Lam5Songthap}
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

export default Lam5Song
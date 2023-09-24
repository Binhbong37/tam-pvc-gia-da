import React from 'react';
import Card from '../../components/Card';
import { LamSong } from '../../data';
import { Image, List } from 'antd';

const Lam3Song = () => {
  return (
    <>
    <h2>Lam 3 sóng thấp</h2>
    <Image.PreviewGroup>
      <List
      dataSource={LamSong}
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

export default Lam3Song
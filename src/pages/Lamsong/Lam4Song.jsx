import React from 'react';
import Card from '../../components/Card';
import { Lam4Songcao } from '../../data';
import { Image, List } from 'antd';

const Lam4Song = () => {
  return (
    <>
    <h2>Lam 4 sóng cao</h2>
    <Image.PreviewGroup>
      <List
      dataSource={Lam4Songcao}
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

export default Lam4Song
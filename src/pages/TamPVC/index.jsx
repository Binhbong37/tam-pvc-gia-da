import React from 'react';
// import { PvcVanDa } from '../../data';
import Card from '../../components/Card';
import { Image, List } from 'antd';
import {db} from '../../firebase';
import {collection, onSnapshot} from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';

const TamPVC = () => {
  const [pvcImages, setPvcImages] = useState([]);
  const [isLoading, seIsLoading] = useState(false);


  useEffect(() => {
    seIsLoading(true);
    const unsub = onSnapshot(collection(db, 'pvc'), (snapshot) => {
      let listPVC = [];
      snapshot.docs.forEach((doc) => {
        listPVC.push({id:doc.id, ...doc.data()})
      });
      listPVC.sort((a, b) => {
        if(a.title.toLowerCase() < b.title.toLowerCase()) return -1
        if(a.title.toLowerCase() > b.title.toLowerCase()) return 1
        return 0
      })
      setPvcImages(listPVC);
      seIsLoading(false)
    }, (err) => {
      console.log('ERR LOIIII');
      console.log(err)
    });

    return() => {
      unsub()
    }

  },[]);
  return (
    
    <Image.PreviewGroup>
      <List
      dataSource={pvcImages}
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

export default TamPVC
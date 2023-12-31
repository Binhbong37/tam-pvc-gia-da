import React from 'react';
import Card from '../../components/Card';
import { Image, List } from 'antd';
import {db} from '../../firebase';
import {collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';

const haveKey = localStorage.getItem('havescrete');

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
      listPVC.sort((a,b) => a.title.localeCompare(b.title, undefined, {numeric:true}))
      
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

  const handleDelete = async(id) => {
    try {
      if(window.confirm('Are you sure to delete this picture?')) {
        await deleteDoc(doc(db, "pvc", id));
        setPvcImages(pvcImages.filter((img) => img.id !== id))
      }
    } catch (error) {
      alert('Co loi khi xoa')
      console.log(error)
    }
  }

  if(isLoading) {
    return(<Spinner />)
  }
  return (
    
    <Image.PreviewGroup>
      <List
      dataSource={pvcImages}
      grid={{xs:2, sm:3, md:4,lg:5, xl:6, xxl:7}}
      renderItem={(item) => {
        return(
          <Card key={item.id} 
          imga={item.img}
          title={item.title}
          keyImg = {item.id}
          haveKey={haveKey} 
          handleDelete={handleDelete}
          />
        )
      }}
      >
      </List>
    </Image.PreviewGroup>
  )
}

export default TamPVC
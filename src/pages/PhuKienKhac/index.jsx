import Card from '../../components/Card';
import { Image, List } from 'antd';
import {db} from '../../firebase';
import {collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';

const haveKey = localStorage.getItem('havescrete');

const PhuKienKhac = () => {
  const [pvcImages, setPvcImages] = useState([]);
  const [isLoading, seIsLoading] = useState(false);
  
  useEffect(() => {
    seIsLoading(true);
    const unsub = onSnapshot(collection(db, 'phukienkhac'), (snapshot) => {
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

  const handleDelete = async(id) => {
    try {
      if(window.confirm('Are you sure to delete this picture?')) {
        await deleteDoc(doc(db, "phukienkhac", id));
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
    <>
    <h2>Phụ kiện PVC & tấm đa năng </h2>
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
    </>
  )
}

export default PhuKienKhac
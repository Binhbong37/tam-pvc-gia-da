import Card from '../../components/Card';
import { Image, List } from 'antd';
import {db} from '../../firebase';
import {collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { useLocation } from 'react-router-dom';

const haveKey = localStorage.getItem('havescrete');

const PhuKienKhac = () => {
  const [pvcImages, setPvcImages] = useState([]);
  const [isLoading, seIsLoading] = useState(false);
  const location = useLocation();
  let path="";
  switch (location.pathname) {
    case '/phu-kien-pvc':
      path="phukienkhac"
      break;
    case "/phao-chi":
      path="phaochi";
      break;
  
    default:
      break;
  }
  
  useEffect(() => {
    seIsLoading(true);
    const unsub = onSnapshot(collection(db, path), (snapshot) => {
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
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[location.pathname]);

  const handleDelete = async(id) => {
    try {
      if(window.confirm('Are you sure to delete this picture?')) {
        await deleteDoc(doc(db, path, id));
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
    <h2>{path==="phukienkhac" ? "Phụ kiện PVC & tấm đa năng" : "Phụ kiện khác"} </h2>
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
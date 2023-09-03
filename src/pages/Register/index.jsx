import './style.css'
import React, { useEffect, useState } from 'react';
import { storage, db } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const initialS = {
  title:'',
  catelogy:'',
}

const Register = () => {
  const [data, setData] = useState(initialS)
  const {title, catelogy} = data
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        setProgress(progress);
        switch(snapshot.state) {
          case "paused":
            console.log("upload is pause")
            break;
          case 'running':
            console.log("upload is running");
            break;
          default:
            console.log('DANG K LAM GI')
            break;
        }
      }, (err) => {
        console.log('loi',err)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then((url) => {
          console.log(url);
          setData((prev) => ({...prev, img: url}))
        })
      }
      
      )

    }

    file && uploadFile()
  }, [file]);

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title) {
      alert('Fill title')
      return;
    }
    if(!catelogy) {
      alert("Fill catelory");
      return;
    }
    await addDoc(collection(db, catelogy), {
      ...data,
      timestamp:serverTimestamp()
    });

    navigate('/')
  }

  return (
    <div className='formRegister'>
     <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Title</label>
        <input name='title' value={title}
        onChange={handleChange}
        />
      </div>
      <div className='form-group'>
      <select name='catelogy'
      onChange={handleChange}
      value={catelogy}
      >
        <option value="">--choose--</option>
        <option value="pvc">PVC</option>
        <option value="lamsong">Lamsong</option>
        <option value="nano">Nano</option>
        <option value="danang">DangNang</option>
        <option value="phukienkhac">PhuKienKhac</option>
      </select>
      </div>
      
      <div className='form-group'>
        <input type='file' onChange={(e) => setFile(e.target.files[0])}/>
      </div>

      <div className='form-group'>
      <button
      disabled={progress !== null && progress < 100}
      >Submit</button>
      </div>
     
     </form>
    </div>
  )
}

export default Register
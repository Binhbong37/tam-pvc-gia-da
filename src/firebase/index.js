import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: 'tam-pvc-gia-da.firebaseapp.com',
    projectId: 'tam-pvc-gia-da',
    storageBucket: 'tam-pvc-gia-da.appspot.com',
    messagingSenderId: '943921599596',
    appId: '1:943921599596:web:812a41a17a5a5a37497449',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };

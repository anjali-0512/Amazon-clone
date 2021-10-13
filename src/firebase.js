import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyCKVdYz2lzC10_MZZMFphqHLZanwA1KC1M",
    authDomain: "clone-oct21-59003.firebaseapp.com",
    projectId: "clone-oct21-59003",
    storageBucket: "clone-oct21-59003.appspot.com",
    messagingSenderId: "184970470840",
    appId: "1:184970470840:web:4284fcba2befa429cc1b4d",
    measurementId: "G-ZQTJDYX0YS"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export { db }
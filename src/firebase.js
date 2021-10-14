import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig ={
    apiKey: "(replace by your API key)",
    authDomain: "(replace by your authDomain)",
    projectId: "(replace by your projectId)",
    storageBucket: "(replcae by your storageBucket)",
    messagingSenderId: "(replace by your messagingSenderId)",
    appId: "(replace by your appId) ",
    measurementId: "(replace by your measurement Id)"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};

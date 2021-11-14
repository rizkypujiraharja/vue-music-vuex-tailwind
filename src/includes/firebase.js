import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJw5p0f2FI1qI5OGRwTge0RdMVBA2ClGk',
  authDomain: 'dev-music-vue.firebaseapp.com',
  projectId: 'dev-music-vue',
  storageBucket: 'dev-music-vue.appspot.com',
  messagingSenderId: '559211456213',
  appId: '1:559211456213:web:e87a8bf1015a306eb8e45c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {
  auth,
  db,
};

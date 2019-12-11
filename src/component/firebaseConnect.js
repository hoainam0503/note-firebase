import * as firebase from 'firebase';
// import firebase from '@firebase/app';
// import '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDIzDGpU6EIFYlYb5fei4cVYAhsa6lQcOs",
    authDomain: "notereact-a6126.firebaseapp.com",
    databaseURL: "https://notereact-a6126.firebaseio.com",
    projectId: "notereact-a6126",
    storageBucket: "notereact-a6126.appspot.com",
    messagingSenderId: "349111849966",
    appId: "1:349111849966:web:3052920d7cc970e73db4ff",
    measurementId: "G-LN4LPLN0V4"
  };
  firebase.initializeApp(firebaseConfig);
  export const noteData = firebase.database().ref('dataForNote');
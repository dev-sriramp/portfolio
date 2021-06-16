import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9NAZj9zcq6JBfFHlhdFrSppKSWQZG_zw",
  authDomain: "contactme-75b99.firebaseapp.com",
  databaseURL: "https://contactme-75b99-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contactme-75b99",
  storageBucket: "contactme-75b99.appspot.com",
  messagingSenderId: "731294450876",
  appId: "1:731294450876:web:98267926a1c18f10c7bcb9"

});

var FireBase = firebaseApp.firestore();

export { FireBase };
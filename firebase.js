 import * as firebase from 'firebase';
 import { initializeApp } from '@react-native-firebase/app';
 const firebaseConfig = {

   apiKey: "AIzaSyBUXsD78BB6V0URab4TU6vNIZ0_waM1g6c",

   authDomain: "bus-seat-booking-system-e57b4.firebaseapp.com",

   databaseURL: "https://bus-seat-booking-system-e57b4-default-rtdb.firebaseio.com",

   projectId: "bus-seat-booking-system-e57b4",

   storageBucket: "bus-seat-booking-system-e57b4.appspot.com",

   messagingSenderId: "1029241471663",

   appId: "1:1029241471663:web:37adee8f8850a5ffbb4a5a",
   measurementId: "G-3355ZG73FL"

 };
 if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
 }else {
   firebase.app();
 }
 export const db = firebase.firestore();
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDzoukDi4hMQKfN0K-YPCDFx6ukGMuIQoY",
  authDomain: "firegram-c8c40.firebaseapp.com",
  projectId: "firegram-c8c40",
  storageBucket: "firegram-c8c40.appspot.com",
  messagingSenderId: "325815498179",
  appId: "1:325815498179:web:448f11e65ec5a380327976",
  measurementId: "G-X8LY11REWC"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
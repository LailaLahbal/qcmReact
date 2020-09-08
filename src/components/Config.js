import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  // TODO
  apiKey: "AIzaSyB1sRQfIo_3HLqNNm7v4SXX79gRouOs0_A",
  authDomain: "qcmreact-30e94.firebaseapp.com",
  databaseURL: "https://qcmreact-30e94.firebaseio.com",
  projectId: "qcmreact-30e94",
  storageBucket: "qcmreact-30e94.appspot.com",
  messagingSenderId: "815161486427",
  appId: "1:815161486427:web:8e30fb6303e821f85e637e",
  databaseURL: "https://qcmreact-30e94.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database };
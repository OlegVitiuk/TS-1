import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD29t6yDeiEMQejdOJQTodtyjctDlRKuck",
  authDomain: "reachgoals-ad1ae.firebaseapp.com",
  databaseURL: "https://reachgoals-ad1ae.firebaseio.com",
  projectId: "reachgoals-ad1ae",
  storageBucket: "",
  messagingSenderId: "259761297274",
  appId: "1:259761297274:web:1c0de2feb260789d"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

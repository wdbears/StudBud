import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCGueOD7Hwq9XmKeyTxZbykOSFOQb-Pjvo",
  authDomain: "stud-bud.firebaseapp.com",
  databaseURL: "https://stud-bud.firebaseio.com",
  projectId: "stud-bud",
  storageBucket: "stud-bud.appspot.com",
  messagingSenderId: "880365564000"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;

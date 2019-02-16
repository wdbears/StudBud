import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGueOD7Hwq9XmKeyTxZbykOSFOQb-Pjvo",
  authDomain: "stud-bud.firebaseapp.com",
  databaseURL: "https://stud-bud.firebaseio.com",
  projectId: "stud-bud",
  storageBucket: "stud-bud.appspot.com",
  messagingSenderId: "880365564000"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // Authentication API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;

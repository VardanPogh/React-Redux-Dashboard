// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import firebaseConfig from "configs/FirebaseConfig";

firebase.initializeApp(firebaseConfig);
// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;
const googleAuthProvider = firebase.auth.GoogleAuthProvider;
const facebookAuthProvider = firebase.auth.FacebookAuthProvider;
const twitterAuthProvider = firebase.auth.TwitterAuthProvider;
const githubAuthProvider = firebase.auth.GithubAuthProvider;
const emailAuthProvider = firebase.auth.EmailAuthProvider;

export {
  db,
  auth,
  currentUser,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  githubAuthProvider,
  emailAuthProvider,
};

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD0fLnE9Z5XbkkEYZA2MbYVuZUpSRpNcrs",
  authDomain: "onlineshop-759e6.firebaseapp.com",
  projectId: "onlineshop-759e6",
  storageBucket: "onlineshop-759e6.appspot.com",
  messagingSenderId: "99930453629",
  appId: "1:99930453629:web:4b114310316094da392314",
  measurementId: "G-MS16KTVRW6",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if user doesn't exist -> exist function, do nothing

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log('doc ref: ',userRef)                    // Document Reference
  const snapShot = await userRef.get();
  // console.log('doc snapshot: ', snapShot)                   // Document Snapshot

  if (!snapShot.exists) {
    //
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  // console.log(firestore.doc('users/23sa'))
  // console.log(snapShot)

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth); // if there is userAuth --> resolve
    }, reject); // if not --> reject
  });
};

export default firebase;

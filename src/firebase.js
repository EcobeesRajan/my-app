// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const db = getFirestore(app);

const saveUserProfile = async (userId, score, accuracy) => {
  try {
    const userRef = doc(db, "users", userId); 
    await setDoc(userRef, {
      score: score,
      accuracy: accuracy,
    }, { merge: true });

    console.log("User profile saved/updated!");
  } catch (error) {
    console.error("Error saving user profile: ", error);
  }
};

const getUserProfile = async (userId) => {
  try {
    const userRef = doc(db, "users", userId); 
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      console.log("User Profile:", docSnap.data()); 
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting user profile: ", error);
  }
};

export { auth, db, saveUserProfile, getUserProfile };



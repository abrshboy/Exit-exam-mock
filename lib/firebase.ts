
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF5rCH4x_KSlqohfJ4a8Y79nbYSvZdMLE",
  authDomain: "exam-prep-app-a10a0.firebaseapp.com",
  projectId: "exam-prep-app-a10a0",
  storageBucket: "exam-prep-app-a10a0.firebasestorage.app",
  messagingSenderId: "657453893320",
  appId: "1:657453893320:web:e919f988f129ab92f147fd",
  measurementId: "G-E6XSBP2CMZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

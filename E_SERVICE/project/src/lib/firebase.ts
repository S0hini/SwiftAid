import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3w4egNQR8U-DAwRWZ2OjloQ84R8mPonc",
  authDomain: "swiftaid-4f465.firebaseapp.com",
  projectId: "swiftaid-4f465",
  storageBucket: "swiftaid-4f465.firebasestorage.app",
  messagingSenderId: "699851015987",
  appId: "1:699851015987:web:6a50e031f3f3b692af6046",
  measurementId: "G-N17B486645"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
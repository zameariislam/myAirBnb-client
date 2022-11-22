
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACMB5fBfBZwCH9wwUAiqPy6U1tPWqMp9s",
  authDomain: "airbnc-34f49.firebaseapp.com",
  projectId: "airbnc-34f49",
  storageBucket: "airbnc-34f49.appspot.com",
  messagingSenderId: "984003770051",
  appId: "1:984003770051:web:bf808fd472191ea4f59476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
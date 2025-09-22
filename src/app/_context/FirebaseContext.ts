import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createContext } from "react";

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSENGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fstore = getFirestore(app);

const fs = {fstore: fstore};
const FSContext = createContext(fs);

export default FSContext;
export { fs }

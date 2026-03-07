import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmDAyj13tJHiC8JmLGttt9L1UbbFBlh00",
    authDomain: "vedahousing-v.firebaseapp.com",
    projectId: "vedahousing-v",
    messagingSenderId: "792515368801",
    appId: "1:792515368801:web:21618ddc5c5bce4a9e5720",
    measurementId: "G-9CFP8V4QML"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;


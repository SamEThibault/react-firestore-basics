import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

    const firebaseConfig = firebase.initializeApp( {

        apiKey: "AIzaSyBqKHnmMs6-kcsPcf8AF_6pVZf2xmOWrmg",
        authDomain: "react-firestore-project.firebaseapp.com",
        projectId: "react-firestore-project",
        storageBucket: "react-firestore-project.appspot.com",
        messagingSenderId: "751365388590",
        appId: "1:751365388590:web:e1f85284e16664a7a1a2bf"
      });

export const db = getFirestore(firebaseConfig);
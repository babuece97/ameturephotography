// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKXflsNqM9ufwSpAlvJ3ggWx4z5O5RwQM",
  authDomain: "ameturephotography-8351b.firebaseapp.com",
  projectId: "ameturephotography-8351b",
  storageBucket: "ameturephotography-8351b.appspot.com",
  messagingSenderId: "98647910590",
  appId: "1:98647910590:web:7085fb0a7f9eef9c1616ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth=getAuth(app);--Asif

export default app;
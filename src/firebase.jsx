// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB0CwiuqGpiIIawfZim2LorrMn0J9AntSo",
  authDomain: "database3-2c428.firebaseapp.com",
  projectId: "database3-2c428",
  storageBucket: "database3-2c428.appspot.com",
  messagingSenderId: "1055257659112",
  appId: "1:1055257659112:web:d7868ccb9c5637f17b6b5d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

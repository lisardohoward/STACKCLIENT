// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDcdw3XKhRCTxVnl1rexy5Hve3P0JmCrqs",
  authDomain: "database2-22f24.firebaseapp.com",
  projectId: "database2-22f24",
  storageBucket: "database2-22f24.appspot.com",
  messagingSenderId: "675111482384",
  appId: "1:675111482384:web:3f31b867a7b899fe69c695"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

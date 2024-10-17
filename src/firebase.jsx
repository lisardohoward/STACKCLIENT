// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCOFi3sVdjJl-DV3yhrjl7u4RfUWBkjkSg",
  authDomain: "stackdb-85d3f.firebaseapp.com",
  projectId: "stackdb-85d3f",
  storageBucket: "stackdb-85d3f.appspot.com",
  messagingSenderId: "632190002929",
  appId: "1:632190002929:web:e90071bac0e42d6455eb50"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

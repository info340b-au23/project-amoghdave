import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABRBgK2EXPfumkcTWkORP96Vtig8AigQ0",
  authDomain: "huskyhomes-9986d.firebaseapp.com",
  databaseURL: "https://huskyhomes-9986d-default-rtdb.firebaseio.com",
  projectId: "huskyhomes-9986d",
  storageBucket: "huskyhomes-9986d.appspot.com",
  messagingSenderId: "140258198910",
  appId: "1:140258198910:web:424d181ca66a12ef55df2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
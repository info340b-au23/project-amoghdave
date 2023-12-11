import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  appId: "1:722430002545:web:ff0e8a76da3af920c1a2d0",
  apiKey: "AIzaSyA-OjVhCyeyFH2rgKYbaXJVxAdw4MVtYQ0",
  authDomain: "apartment-homes.firebaseapp.com",
  databaseURL: 'https://apartment-homes-default-rtdb.firebaseio.com',
  projectId: "apartment-homes",
  storageBucket: "apartment-homes.appspot.com",
  messagingSenderId: "722430002545",
};

const app = initializeApp(firebaseConfig);

export default app;

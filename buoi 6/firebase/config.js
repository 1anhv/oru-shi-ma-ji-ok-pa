  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

  import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyDsTe6D8EbBqVLUvczrByNAQZqp1hndQ0Q",

    authDomain: "jsi03-c45db.firebaseapp.com",

    projectId: "jsi03-c45db",

    storageBucket: "jsi03-c45db.appspot.com",

    messagingSenderId: "154959379437",

    appId: "1:154959379437:web:080ab6d3f1492591b805e4",

    measurementId: "G-4S77C8TLR6"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);



// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);

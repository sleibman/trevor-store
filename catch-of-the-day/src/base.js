import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiG4rEJ9s8q5l0IrWY3_-t5-6Kyb6wVrI",
  authDomain: "catch-of-the-day-b5d04.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-b5d04-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-b5d04",
  storageBucket: "catch-of-the-day-b5d04.appspot.com",
  messagingSenderId: "104658487971",
  appId: "1:104658487971:web:f4a5c00f748b72baf80d16",
  measurementId: "G-NYWMZ5KC8E",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBiG4rEJ9s8q5l0IrWY3_-t5-6Kyb6wVrI",
//     authDomain: "catch-of-the-day-b5d04.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-b5d04-default-rtdb.firebaseio.com",
//     projectId: "catch-of-the-day-b5d04",
//     storageBucket: "catch-of-the-day-b5d04.appspot.com",
//     messagingSenderId: "104658487971",
//     appId: "1:104658487971:web:f4a5c00f748b72baf80d16",
//     measurementId: "G-NYWMZ5KC8E"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

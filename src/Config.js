import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

     apiKey: "AIzaSyCYXAMg2FAn-lzlXPfQysWdivxHc32EQ6M",
     authDomain: "portfolio-reactapp-48e48.firebaseapp.com",
     projectId: "portfolio-reactapp-48e48",
     storageBucket: "portfolio-reactapp-48e48.appspot.com",
     messagingSenderId: "346523592329",
     appId: "1:346523592329:web:e825449cd35ad92efb8858",
     measurementId: "G-LKXY4CMP17"


});

var db = firebaseApp.firestore();

export {db};

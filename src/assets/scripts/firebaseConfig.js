const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAHX_WdaRwdOw-5jdZr1Yz41fHvLMXGPAU",
  authDomain: "para-programadores.firebaseapp.com",
  databaseURL: "https://para-programadores.firebaseio.com",
  projectId: "para-programadores",
  storageBucket: "para-programadores.appspot.com",
  messagingSenderId: "302296583522",
  appId: "1:302296583522:web:91f46cee4bb6b10768f03b",
  measurementId: "G-DC2TFNMRXE"
});

var db = firebase.firestore();
 firebase.analytics();
// db.settings({timestampsInSnapshots:true});//Permite la interaccion en tiempo real

export default db;
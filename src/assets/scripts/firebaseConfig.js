const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAHX_WdaRwdOw-5jdZr1Yz41fHvLMXGPAU',
  authDomain: 'para-programadores.firebaseapp.com',
  projectId: 'para-programadores'
});

var db = firebase.firestore();
// db.settings({timestampsInSnapshots:true});//Permite la interaccion en tiempo real

export default db;
import firebase from'firebase';

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
 
    apiKey: "AIzaSyAf9qaqEdlbFoltOHIb4K2wjk76rFaZVTI",
    authDomain: "zit-contact-f5247.firebaseapp.com",
    databaseURL: "https://zit-contact-f5247.firebaseio.com",
    projectId: "zit-contact-f5247",
    storageBucket: "zit-contact-f5247.appspot.com",
    messagingSenderId: "813975314277",
    appId: "1:813975314277:web:94b1773f7d8aeda6920b8c"
 
  
});

var db = firebaseApp.firestore();

export { db };
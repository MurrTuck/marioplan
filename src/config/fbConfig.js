import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBTo_A1eq5mpbR7vDthjcOwWAIorE7z6fQ",
    authDomain: "go-mario.firebaseapp.com",
    databaseURL: "https://go-mario.firebaseio.com",
    projectId: "go-mario",
    storageBucket: "",
    messagingSenderId: "366565458334"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
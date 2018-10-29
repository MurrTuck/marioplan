import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfo1QR9DKsMAhyUJ33-8OSe3kWGwZPx0Y",
    authDomain: "marioplan-go-go.firebaseapp.com",
    databaseURL: "https://marioplan-go-go.firebaseio.com",
    projectId: "marioplan-go-go",
    storageBucket: "marioplan-go-go.appspot.com",
    messagingSenderId: "66987964788"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
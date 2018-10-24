import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyAt1SvhZpJA2TCDFcVFZtrtq2F1MNskvXc',
    authDomain: "marioplan-go.firebaseapp.com",
    databaseURL: "https://marioplan-go.firebaseio.com",
    projectId: "marioplan-go",
    storageBucket: "",
    messagingSenderId: "442702985895"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
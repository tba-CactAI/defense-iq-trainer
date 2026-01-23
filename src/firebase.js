import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAYdtvjWcfssqNOpno2wULeh5ga_siF-xE",
    authDomain: "zowned-41710.firebaseapp.com",
    projectId: "zowned-41710",
    storageBucket: "zowned-41710.firebasestorage.app",
    messagingSenderId: "422397719027",
    appId: "1:422397719027:web:9294c0e262cb317deea286",
    measurementId: "G-8HGHQPJJRN"
};

let app, auth, db, analytics;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    analytics = getAnalytics(app);
} catch (e) {
    console.error("Firebase Initialization Error:", e);
}

export { app, auth, db, analytics };

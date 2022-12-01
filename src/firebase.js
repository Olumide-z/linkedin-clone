import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBu2fjs8NfLIlDX3Q0NJtJGty7YVpxBwdc",
    authDomain: "linkedin-clone-6bddb.firebaseapp.com",
    projectId: "linkedin-clone-6bddb",
    storageBucket: "linkedin-clone-6bddb.appspot.com",
    messagingSenderId: "696907353671",
    appId: "1:696907353671:web:e32b4bab0cf6ac556deb62",
    measurementId: "G-9B91RBFZNT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();


// const app = initializeApp(firebaseConfig);
// export const db = app.firestore();
// export const auth = getAuth(app);
// export default app;

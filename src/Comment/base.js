import Rebase from 're-base';
import firebase from 'firebase';

//Use this file to put your Firebase configurations here and then rename it to base.js

const app = firebase.initializeApp({
    apiKey: 'AIzaSyD_B4PfAL5Go5N3gN3x5yksWdGt6XuQGvA',
    authDomain: 'pdogs-blog-comment.firebaseapp.com',
    databaseURL:
        'https://pdogs-blog-comment-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'pdogs-blog-comment',
    storageBucket: 'pdogs-blog-comment.appspot.com',
    messagingSenderId: '87319842660',
    appId: '1:87319842660:web:9dd8cbafca84e720283471',
    measurementId: 'G-Y7EZJ1CXT9',
});

const base = Rebase.createClass(app.database());
export const providers = {
    facebook: new firebase.auth.FacebookAuthProvider(),
    google: new firebase.auth.GoogleAuthProvider(),
};
export const auth = firebase.auth();
export default base;

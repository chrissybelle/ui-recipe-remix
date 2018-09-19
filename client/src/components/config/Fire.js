import firebase from 'firebase';
 // Configure Firebase.
const config = {
    apiKey: "AIzaSyC-4NsFuVCy50k8nlh4v1GMuDWBG9Tufx8",
    authDomain: "ui-recipe.firebaseapp.com",
    databaseURL: "https://ui-recipe.firebaseio.com",
    // ...
};

firebase.initializeApp(config);
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const reference = firebase
export default firebase; 
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIrB3p2KXHrdECt2w5cNjIbFMTHVFFsgM",
    authDomain: "my-image-wall.firebaseapp.com",
    databaseURL: "https://my-image-wall.firebaseio.com",
    projectId: "my-image-wall",
    storageBucket: "my-image-wall.appspot.com",
    messagingSenderId: "540912265746",
    appId: "1:540912265746:web:a50d3f609ed791dbe786cb",
    measurementId: "G-BVDKVYDK20"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
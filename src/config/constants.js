import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCFHI5b30qlHmv-Z6un_6eKFE8G5zJlCiY",
  authDomain: "pwaproject-229b9.firebaseapp.com",
  databaseURL: "https://pwaproject-229b9.firebaseio.com",

}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
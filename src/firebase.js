
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCE_UcyTwnq0nCknK5Ew4rERStQe3Z1qCY",
  authDomain: "vuechat-9e5eb.firebaseapp.com",
  databaseURL: "https://vuechat-9e5eb.firebaseio.com",
  projectId: "vuechat-9e5eb",
  storageBucket: "vuechat-9e5eb.appspot.com",
  messagingSenderId: "175017321265"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
export default firebase;
export var chatRef = firebaseRef.child('chat');

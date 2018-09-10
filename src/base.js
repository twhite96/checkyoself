import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6RvaQ565u24lNMyIBaAEIo9AGJcSc_a0",
  authDomain: "checkyoself-565d3.firebaseapp.com",
  databaseURL: "https://checkyoself-565d3.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

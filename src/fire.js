import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCIt6Wx-2I4x9j2K6EA_8n6bChKKhrXxsw",
    authDomain: "graphql-drupal8.firebaseapp.com",
    databaseURL: "https://graphql-drupal8.firebaseio.com",
    projectId: "graphql-drupal8",
    storageBucket: "graphql-drupal8.appspot.com",
    messagingSenderId: "1013070021628"
  };
var fire = firebase.initializeApp(config);
export default fire;

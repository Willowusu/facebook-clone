// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAIU-5xx28ze2wviybg8C0PsG7ByknIWjw",
    authDomain: "facebook-clone-9617e.firebaseapp.com",
    databaseURL: "https://facebook-clone-9617e.firebaseio.com",
    projectId: "facebook-clone-9617e",
    storageBucket: "facebook-clone-9617e.appspot.com",
    messagingSenderId: "205155980216",
    appId: "1:205155980216:web:df40aaa3e80f4ac79bb54d",
    measurementId: "G-E32827X30E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;
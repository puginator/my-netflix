import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './App';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyC82PfxN8LCmkFpAcSxc7LfvpiCGItEOsg",
  authDomain: "netflix-f696c.firebaseapp.com",
  projectId: "netflix-f696c",
  storageBucket: "netflix-f696c.appspot.com",
  messagingSenderId: "199360560266",
  appId: "1:199360560266:web:11070f4b4c6f0001bd4173"
};

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase:window.firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);


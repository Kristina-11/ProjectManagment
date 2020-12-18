import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './Store/Reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

const ReduxThunk = require('redux-thunk').default;
// In order to connect firestore and firebase to redux we need to use store enhancers
// Connecting everything with combining several store enhancers with compose
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCA1S3T4WyaocEBiQV73rmiGEPQhuRrnGo",
    authDomain: "projectmanagment-28660.firebaseapp.com",
    projectId: "projectmanagment-28660",
    storageBucket: "projectmanagment-28660.appspot.com",
    messagingSenderId: "49901905721",
    appId: "1:49901905721:web:201cf897f96fb6729d2ae8",
    measurementId: "G-MX4BZ2GCKX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  firebase.analytics();

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users', // this
  useFirestoreForProfile: true, // and this are used for gathering users info from firebase and firestore
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const store = createStore(
  rootReducer, 
  compose(
      applyMiddleware(
        ReduxThunk.withExtraArgument({ getFirebase, getFirestore })
        ),
      reduxFirestore(firebase, firebaseConfig)
    )
  );

  const rffProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    attachAuthIsReady: true
  }

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="container center loading">Loading...</div>;
      return children
}

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps} >
        <AuthIsLoaded>
          <Router>
            <App />
          </Router>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

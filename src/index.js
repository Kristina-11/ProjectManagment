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
import thunk from 'redux-thunk';
import firebase from './config/fbConfig';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import 'firebase/firestore';
// In order to connect firestore and firebase to redux we need to use store enhancers
// Connecting everything with combining several store enhancers with compose

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'projects'
}

const store = createStore(
  rootReducer, 
  compose(
      applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore })
        ),
      reduxFirestore(firebase)
    )
  );

  const rffProps = {
    firebase,
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    userProfile: 'users', // where profiles are stored in database
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="container center loading">Loading...</div>;
      return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <AuthIsLoaded>
          <Router>
            <App />
          </Router>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

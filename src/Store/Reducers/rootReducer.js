import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const { combineReducers } = require("redux");
const { default: authReducer } = require("./authReducer");
const { default: projectReducer } = require("./projectReducer");

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, // Syncs data to a state
    firebase: firebaseReducer, // Auth syncing
});

export default rootReducer
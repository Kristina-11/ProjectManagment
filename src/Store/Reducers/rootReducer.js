const { combineReducers } = require("redux");
const { default: authReducer } = require("./authReducer");
const { default: projectReducer } = require("./projectReducer");

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer
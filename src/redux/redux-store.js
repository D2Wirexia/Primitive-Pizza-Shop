import {combineReducers, createStore} from "redux";
import itemReducer from "./itemReducer";

let reducers = combineReducers({
	itemPage: itemReducer
});
let store = createStore(reducers);

window.store = store;

export default store;
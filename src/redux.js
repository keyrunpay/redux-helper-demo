import { createStore, combineReducers } from "redux";
import { makeReducer } from "redux-helper-np";

const allReducer = combineReducers({
  counter: makeReducer("counter", { count: 0 }),
  users: makeReducer("users"), // {status: "idle", data: null}
  custom: makeReducer("custom", { text: "This is orginal", clonedText: "n/a" }),
});

const store = createStore(allReducer);

export default store;

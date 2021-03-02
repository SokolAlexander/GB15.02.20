import { createStore, combineReducers } from "redux";

import profileReducer from "./profile/reducer";
import chatsReducer from "./chats/reducer";

export default createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

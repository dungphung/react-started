import { createStore, combineReducers } from "redux";

import { SideBarReducer } from "../reducers";

function createRedux(initialState = {}) {
  const store = createStore(
    combineReducers({
      SideBarReducer,
    }),
    initialState,
  );

  return store;
}

export default {
  createRedux,
};

export { createRedux };

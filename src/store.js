import { createStore } from "redux";
import { reducer } from "./reducer";

const enchancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enchancer); 
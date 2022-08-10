import { combineReducers } from "redux";
import { layoutSlice } from "./silce/layoutSlice";

const reducer = combineReducers({
  layout: layoutSlice,
});

export default reducer;

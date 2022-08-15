import { LOADING } from "../const/index";
const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING: //code đưa sách vào store
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default loadingReducer;

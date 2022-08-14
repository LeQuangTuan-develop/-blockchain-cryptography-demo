import { COUNTER } from "../const/index";
const counterReducer = (state = [], action) => {
    switch (action.type) {
      case COUNTER: //code đưa sách vào store
        state = [...state, ...action.payload];
        return state;
      default:
        return state;
    }
  };
  export default counterReducer;
  
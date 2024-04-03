import { combineReducers, createStore } from "redux";
import { accountreducer } from "./assets/Features/Account/AccountSlice";
import { customerReducer } from "./assets/Features/Customer/CustomerSlice";



//-----------------------------------------------------//
//store//

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store
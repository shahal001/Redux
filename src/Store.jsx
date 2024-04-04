import { applyMiddleware, combineReducers, createStore } from "redux";
import { accountreducer } from "./assets/Features/Account/AccountSlice";
import { customerReducer } from "./assets/Features/Customer/CustomerSlice";
import { thunk } from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension"



//-----------------------------------------------------//
//store//

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store
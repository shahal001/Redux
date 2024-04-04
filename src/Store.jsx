import {configureStore} from "@reduxjs/toolkit"
import accountreducer  from "./assets/Features/Account/AccountSlice";
import { customerReducer } from "./assets/Features/Customer/CustomerSlice";




//-----------------------------------------------------//
//store//



const store = configureStore({
  reducer:{
    account: accountreducer,
    customer: customerReducer,
  }
})

export default store
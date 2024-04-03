import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  lone: 0,
  lonepurpose: "",
};

function accountreducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.balance,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.balance,
      };
    case "account/requestlone":
      if (state.lone > 0) return state;
      return {
        ...state,
        lone: action.balance.amount,
        lonepurpose: action.balance.lonepurpose,
      };
    case "account/paylone":
      return {
        ...state,
        lone: 0,
        lonepurpose: "",
        balance: state.balance - state.lone,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    account:accountreducer
})

const store = createStore(rootReducer)

// store.dispatch({type:"account/deposit",balance:1500})
// store.dispatch({type:"account/requestlone",balance:{amount:50000,lonepurpose:"buy a car"}})

// console.log(store.getState());

function deposit(amount){
    return{type:"account/deposit",balance:amount}
}
function witdraw(amount){
    return{type:"account/withdraw",balance:amount}
}
function lone(){
    return{
        type:"account/requestlone",
        balance:{amount:5000,lonepurpose:"for buy bus"}
    }
}

store.dispatch(deposit(12500))
store.dispatch(witdraw(6500))
store.dispatch(lone())
console.log(store.getState());



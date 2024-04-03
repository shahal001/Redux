const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };


  export  function accountreducer(state = initialState, action) {
    switch (action.type) {
      //new recomented pattern
      //balence==paylaod
      case "account/deposit":
        return { ...state, balance: state.balance + action.balance };
  
      case "account/witdraw":
        return { ...state, balance: state.balance - action.balance };
  
      case "account/requestLoan":
        if (state.loan > 0) return state;
  
        return {
          ...state,
          loan: action.balance.amount,
          loanPurpose: action.balance.purpose,
          balance: state.balance + action.balance.amount,
        };
  
      case "account/payloan":
        return {
          ...state,
          loan: 0,
          loanPurpose: "",
          balance: state.balance - state.loan,
        };
      default:
        return state;
    }
  }

  //-----------------------------------------------------//
// action creators for account reducer

export function deposit(amount) {
    return { type: "account/deposit", balance: amount };
  }
  
 export  function witdraw(amount) {
    return { type: "account/witdraw", balance: amount };
  }
  
 export  function requestLoan(amount) {
    return {
      type: "account/requestLoan",
      balance: { amount: 50000, purpose: "buy a car" },
    };
  }
  
 export  function payloan(amount) {
    return { type: "account/witdraw", balance: amount };
  }
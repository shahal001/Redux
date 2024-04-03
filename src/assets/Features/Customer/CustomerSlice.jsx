const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: "",
  };
  

  export function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
      case "customer/createNewAccount":
        return {
          ...state,
          fullName: action.payload.fullName,
          nationalID: action.payload.nationalID,
          createdAt: new Date().toISOString(),
        };
      case "customer/update":
        return {
          ...state,
          fullName: action.payload.fullName,
        };
      default:
        return state;
    }
  }

  export function createCustomer(fullName, nationalID) {
    return {
      type: "customer/createNewAccount",
      payload: { fullName, nationalID},
    };

     
  }
  export  function updateName(fullName){
    return{
      type:"customer/update",
      payload:fullName
    }
   } 
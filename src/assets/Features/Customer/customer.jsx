import { useSelector } from "react-redux";
//to access the store value in react component

function Customer() {
    const customer = useSelector((store)=>store.customer.fullName);

    // console.log(customer)

    return <h2>👋 Welcome,{customer}</h2>;
  }
  
  export default Customer;
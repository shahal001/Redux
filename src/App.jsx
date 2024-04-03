import React from "react";
import CreateCustomer from "./assets/Features/Customer/CreateCustomer";
import Customer from "./assets/Features/Customer/customer";
import AccountOperations from "./assets/Features/Account/AccountOperations";
import BalanceDisplay from "./assets/Features/Account/BalanceDisplay";
import { useSelector } from "react-redux";

const App = () => {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>Welcome to Shahal Bank </h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
};

export default App;

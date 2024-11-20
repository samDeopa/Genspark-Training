import { useReducer } from "react";

interface UserStateModel {
  id: number | null;
  name: string;
  accountNo: number;
  balance: number;
  currentAmount: number;
}

type UserAction =
  | { type: "deposit"; amount: number }
  | { type: "withdraw"; amount: number }
  | { type: "current"; amount: number };

const BankApp = () => {
  const reducerFuntion = (
    state: UserStateModel,
    action: UserAction
  ): UserStateModel => {
    switch (action.type) {
      case "deposit":
        return { ...state, balance: state.balance + action.amount };
      case "withdraw":
        return { ...state, balance: state.balance - action.amount };
      case "current":
        return { ...state, currentAmount: action.amount };
      default:
        throw new Error("Unknown action type");
    }
    return state;
  };
  const [state, dispacth] = useReducer(reducerFuntion, {
    id: 1,
    name: "sam",
    accountNo: 2223,
    balance: 21111,
    currentAmount: 0,
  });
  const handleDeposit = () => {
    dispacth({ type: "deposit", amount: state.currentAmount });
  };
  const handleWithdraw = () => {
    dispacth({ type: "withdraw", amount: state.currentAmount });
  };

  return (
    <div>
      <div>
        <p>User Name: {state.name}</p>
        <p>Account Balance: {state.balance}</p>
        <div>
          <input
            type="number"
            value={state.currentAmount}
            onChange={(e) => {
              dispacth({
                type: "current",
                amount: Number(e.target.value),
              });
              console.log(e);
            }}
          />
          <br />
          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
      </div>
    </div>
  );
};
export default BankApp;

import "./App.css";
import AuthProvider from "./component/Assignment1-AuthProvider/AuthProvider";
import UserProfile from "./component/Assignment1-AuthProvider/UserProfile";
import BankApp from "./component/Assignment2-Reducers/BankApp";
import UserDisplay from "./component/Assignment3-ReactQuery/UserDisplay";
import TodoApp from "./component/TodoApp";

function App() {
  return (
    <>
      {/* <TodoApp /> */}
      {/* <AuthProvider children={<UserProfile />} /> */}
      {/* <BankApp /> */}
      <UserDisplay />
    </>
  );
}

export default App;

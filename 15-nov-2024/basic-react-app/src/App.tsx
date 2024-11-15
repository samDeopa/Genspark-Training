import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const obj = {
    user: { name: "Sam" },
  };
  return (
    <>
      <Greeting object={obj} name="sam" color="red"></Greeting>
    </>
  );
}

export default App;

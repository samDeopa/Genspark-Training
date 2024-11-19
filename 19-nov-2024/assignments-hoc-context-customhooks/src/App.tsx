import { createContext } from "react";
import "./App.css";
import Parent from "./components/Parent";
import DataTable from "./components/DataTable";
import LocalStorage from "./components/LocalStorage";
export interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  return (
    <>
      {/* <Parent></Parent> */}
      {/* <DataTable
        dataProperties={["id", "name", "email"]}
        url="https://jsonplaceholder.typicode.com/users"
      /> */}
      <LocalStorage></LocalStorage>
    </>
  );
}

export default App;

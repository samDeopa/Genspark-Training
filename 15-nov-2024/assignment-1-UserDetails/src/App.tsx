import { useEffect, useState } from "react";
import "./App.css";
import UserModel from "./models/UserModel";
import UserCard from "./components/UserCard/UserCard";

// user URL - https://reqres.in/api/users/
function App() {
  const [userList, setuserList] = useState<UserModel[]>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((res) => res.json())
      .then((json) => setuserList(json.data));
  }, []);

  return (
    <>
      <h1>User List</h1>
      <div className="cardDisplay">
        {userList.map((user) => (
          <UserCard user={user}></UserCard>
        ))}
      </div>
    </>
  );
}

export default App;

import React, { createContext } from "react";
import { User } from "../App";
import Child from "./Child";
import GrandChild from "./GrandChild";
import { UserContext } from "../utils/UserContext";

class Parent extends React.Component<{}, { User: User }> {
  state = { User: { id: 12, name: "Sameer", email: "sam@gmail.com" } };

  render(): React.ReactNode {
    return (
      <>
        <h1>From the Parent Component</h1>
        <UserContext.Provider value={this.state.User}>
          <hr />
          <Child></Child>
        </UserContext.Provider>
      </>
    );
  }
}
export default Parent;

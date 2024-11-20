import { Component, Context } from "react";
import { UserContext } from "../utils/UserContext";
import { User } from "../App";

export default class GrandChild extends Component {
  static contextType = UserContext;
  render() {
    const user = this.context;

    return (
      //wrap this in the context provider
      <div>
        <h4>From the GrandChild Component</h4>
        <p>
          c User Id : {user?.id} <br />
          User Name : {user?.name} <br />
          User Email : {user?.email}
        </p>
      </div>
    );
  }
}

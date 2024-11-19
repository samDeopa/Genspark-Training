import { Component, ReactNode } from "react";
import GrandChild from "./GrandChild";

export default class Child extends Component {
  render(): ReactNode {
    return (
      <div>
        <h2>From Child Component</h2>
        <hr />
        <GrandChild></GrandChild>
      </div>
    );
  }
}

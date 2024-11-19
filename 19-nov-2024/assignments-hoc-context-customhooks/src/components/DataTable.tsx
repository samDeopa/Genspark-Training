import React, { Component } from "react";
import withFetchHoc from "./withFetchHoc";
import GridHoc from "./gridHoc";

// dataProperties :["name", "id", "age"];
// URL - ("https://jsonplaceholder.typicode.com/users");

type User = {
  id: number;
  name: string;
  email: string;
};

type DataListProps = {
  data: unknown[] | null;
  dataProperties: string[];
};

class UserList extends Component<DataListProps> {
  render() {
    const { data, dataProperties } = this.props;

    return (
      <table style={{ border: "2px solid grey" }}>
        <thead>
          <tr>
            {dataProperties.map((key) => {
              return <th style={{ border: "2px solid grey" }}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr>
                {dataProperties.map((key) => {
                  return (
                    <td style={{ border: "2px solid grey" }}>{item[key]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// Wrap the UserList component with the `withFetch` HOC
export default GridHoc(UserList);

import React, { Component } from "react";

type WithFetchProps = {
  url: string;
  dataProperties: string[];
};

type WithFetchState = {
  data: unknown[] | null;
};

function GridHoc(
  WrappedComponent: React.ComponentType<{
    data: unknown[] | null;
    dataProperties: string[];
  }>
) {
  return class extends Component<WithFetchProps, WithFetchState> {
    state: WithFetchState = {
      data: null,
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
      const { url } = this.props;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    };

    render() {
      const { data } = this.state;
      return (
        <WrappedComponent
          data={data}
          dataProperties={this.props.dataProperties}
        />
      );
    }
  };
}

export default GridHoc;

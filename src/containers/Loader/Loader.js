import React from "react";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-color: red;
`;
 
class Loader extends React.Component {
  
  render() {
    return (
      <div className="loading">
        <BounceLoader
          css={override}
          size={60}
          color={"#123abc"}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

export default Loader;
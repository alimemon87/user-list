import React from "react";
import './Loader.css';
 
class Loader extends React.Component {
  
  render() {
    return (
      <div className="alignment">
        <div className="pulse-loader"></div>
      </div>

    );
  }
}

export default Loader;
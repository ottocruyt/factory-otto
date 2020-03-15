import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="Navbar-icons">
        {this.props.lijst ? (
          <i className="fas fa-map">
            <span>Plattegrond</span>
          </i>
        ) : (
          <i className="fas fa-list-ul">
            <span>Lijst</span>
          </i>
        )}
      </div>
    );
  }
}

export default Navbar;
